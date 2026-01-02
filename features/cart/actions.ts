/** biome-ignore-all lint/correctness/noUnusedFunctionParameters: prevState required by useActionState signature */
/** biome-ignore-all lint/suspicious/noExplicitAny: action state type is flexible */
"use server";

import type { Route } from "next";
import { updateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  addToCart,
  createCart,
  getCart,
  removeFromCart,
  updateCart,
} from "@/shopify";
import { TAGS } from "@/shopify/constants";

export async function addItem(
  prevState: any,
  payload:
    | { selectedVariantId: string | undefined; quantity?: number }
    | FormData
) {
  let selectedVariantId: string | undefined;
  let quantity: number;

  if (payload instanceof FormData) {
    selectedVariantId = payload.get("selectedVariantId") as string;
    quantity = Number(payload.get("quantity")) || 1;
  } else {
    selectedVariantId = payload.selectedVariantId;
    quantity = payload.quantity || 1;
  }

  console.log("addItem server action: payload =", {
    selectedVariantId,
    quantity,
  });
  if (!selectedVariantId) {
    console.error("No variant selected");
    return "Error adding item to cart";
  }

  try {
    const cart = await getCart();
    const existingItem = cart?.lines.find(
      (line) => line.merchandise.id === selectedVariantId
    );

    if (existingItem?.id && cart) {
      const newQuantity = existingItem.quantity + quantity;
      console.log("Item exists, updating quantity to:", newQuantity);

      const result = await updateCart([
        {
          id: existingItem.id,
          merchandiseId: selectedVariantId,
          quantity: newQuantity,
        },
      ]);

      if (
        result.warnings?.some((w) => w.code === "MERCHANDISE_NOT_ENOUGH_STOCK")
      ) {
        return "Variant is no longer available";
      }

      updateTag(TAGS.cart);
      return "Item added successfully";
    }

    const result = await addToCart([
      { merchandiseId: selectedVariantId, quantity },
    ]);

    if (result.error) {
      return result.error;
    }

    if (
      result.warnings?.some((w) => w.code === "MERCHANDISE_NOT_ENOUGH_STOCK")
    ) {
      return "Variant is no longer available";
    }

    updateTag(TAGS.cart);
    return "Item added successfully";
  } catch (e) {
    console.error("Error adding item to cart", e);
    return "Error adding item to cart";
  }
}

export async function removeItem(prevState: any, merchandiseId: string) {
  try {
    const cart = await getCart();
    if (!cart) {
      console.error("Error fetching cart");
      return "Error fetching cart";
    }
    const lineItem = cart.lines.find(
      (line) => line.merchandise.id === merchandiseId
    );
    if (lineItem?.id) {
      await removeFromCart([lineItem.id]);
      updateTag(TAGS.cart);
      return "Item removed successfully";
    }
    console.error("Item not found in cart");
    return "Item not found in cart";
  } catch (e) {
    console.error("Error removing item from cart", e);
    return "Error removing item from cart";
  }
}

export async function updateItemQuantity(
  prevState: any,
  payload: {
    merchandiseId: string;
    quantity: number;
  }
) {
  const { merchandiseId, quantity } = payload;

  try {
    const cart = await getCart();
    if (!cart) {
      console.error("Error fetching cart");
      return "Error fetching cart";
    }
    const lineItem = cart.lines.find(
      (line) => line.merchandise.id === merchandiseId
    );
    if (lineItem?.id) {
      if (quantity === 0) {
        await removeFromCart([lineItem.id]);
        updateTag(TAGS.cart);
        return "Item removed successfully";
      }
      const result = await updateCart([
        {
          id: lineItem.id,
          merchandiseId,
          quantity,
        },
      ]);

      if (
        result.warnings?.some((w) => w.code === "MERCHANDISE_NOT_ENOUGH_STOCK")
      ) {
        return "Variant is no longer available";
      }

      updateTag(TAGS.cart);
      return "Item quantity updated successfully";
    }
    if (quantity > 0) {
      // If the item doesn't exist in the cart and quantity > 0, add it
      const result = await addToCart([{ merchandiseId, quantity }]);

      if (result.error) {
        return result.error;
      }
      if (
        result.warnings?.some((w) => w.code === "MERCHANDISE_NOT_ENOUGH_STOCK")
      ) {
        return "Variant is no longer available";
      }

      updateTag(TAGS.cart);
      return "Item added successfully";
    }
    return "No action performed";
  } catch (e) {
    console.error("Error updating item quantity", e);
    return "Error updating item quantity";
  }
}

export async function redirectToCheckout() {
  const cart = await getCart();
  if (!cart?.checkoutUrl) {
    console.error("No cart found for checkout");
    return;
  }
  redirect(cart.checkoutUrl as Route);
}

export async function createCartAndSetCookie() {
  const cart = await createCart();
  if (cart?.id) {
    (await cookies()).set("cartId", cart.id);
  }
}

export async function handleCheckout() {
  const cart = await getCart();
  if (!cart?.checkoutUrl) {
    console.error("No cart found for checkout");
    return;
  }
  redirect(cart.checkoutUrl as Route);
}

export async function buyNow(
  prevState: any,
  payload:
    | { selectedVariantId: string | undefined; quantity?: number }
    | FormData
) {
  let selectedVariantId: string | undefined;
  let quantity: number;

  if (payload instanceof FormData) {
    selectedVariantId = payload.get("selectedVariantId") as string;
    quantity = Number(payload.get("quantity")) || 1;
  } else {
    selectedVariantId = payload.selectedVariantId;
    quantity = payload.quantity || 1;
  }

  if (!selectedVariantId) {
    console.error("No variant selected");
    return "Error: No variant selected";
  }

  let checkoutUrl: string | undefined;

  try {
    // Add item to cart
    await addToCart([{ merchandiseId: selectedVariantId, quantity }]);
    updateTag(TAGS.cart);

    // Get the updated cart and redirect to checkout
    const cart = await getCart();
    checkoutUrl = cart?.checkoutUrl;
    if (!checkoutUrl) {
      console.error("No cart found for checkout");
      return "Error: Could not create checkout";
    }
  } catch (e) {
    console.error("Error in buy now", e);
    return "Error processing buy now";
  }

  redirect(checkoutUrl as Route);
}
