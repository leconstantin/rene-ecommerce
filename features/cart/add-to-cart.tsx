/** biome-ignore-all lint/style/noNonNullAssertion: variant is guaranteed to exist by conditional logic */
/** biome-ignore-all lint/a11y/useButtonType: button type is specified in component */
"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import type { Product, ProductVariant } from "@/shopify/types";
import { useProduct } from "../product/product-context";
import { addItem } from "./actions";
import { useCart } from "./cart-context";

function SubmitButton({
  availableForSale,
  selectedVariantId,
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
}) {
  const { pending } = useFormStatus();
  if (!availableForSale) {
    return (
      <Button
        aria-label="Out of stock"
        className="rounded-full bg-brand hover:bg-brand-hover"
        disabled
        size="xl"
      >
        Out of stock
      </Button>
    );
  }

  if (!selectedVariantId) {
    return (
      <Button
        aria-label="Please select an option"
        className="rounded-full bg-brand hover:bg-brand-hover"
        disabled
        size="xl"
      >
        Add to cart
      </Button>
    );
  }

  return (
    <Button
      aria-label="Add to cart"
      className="w-full rounded-full bg-brand hover:bg-brand-hover"
      disabled={pending}
      size={"xl"}
      type="submit"
    >
      {pending ? "Adding..." : "Add to cart"}
    </Button>
  );
}

export function AddToCart({
  product,
  quantity = 1,
}: {
  product: Product;
  quantity?: number;
}) {
  const { variants, availableForSale } = product;
  const { addCartItem } = useCart();
  const { state } = useProduct();
  const [message, formAction] = useActionState(addItem, null);

  const variant = variants.find((v: ProductVariant) =>
    v.selectedOptions.every(
      (option) => option.value === state[option.name.toLowerCase()]
    )
  );
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const selectedVariantId = variant?.id || defaultVariantId;
  const finalVariant = variants.find((v) => v.id === selectedVariantId)!;

  const handleSubmit = async (formData: FormData) => {
    console.log("AddToCart handleSubmit: quantity from prop =", quantity);
    if (finalVariant) {
      addCartItem(finalVariant, product, quantity);
    }
    await formAction(formData);
  };

  useEffect(() => {
    if (message === "Item added successfully") {
      toast.success("Added to cart");
    } else if (
      typeof message === "string" &&
      message.toLowerCase().includes("error")
    ) {
      toast.error(message);
    }
  }, [message]);

  return (
    <form action={handleSubmit}>
      <input name="selectedVariantId" type="hidden" value={selectedVariantId} />
      <input name="quantity" type="hidden" value={quantity} />
      <SubmitButton
        availableForSale={availableForSale}
        selectedVariantId={selectedVariantId}
      />
      <p aria-live="polite" className="sr-only">
        {message}
      </p>
    </form>
  );
}
