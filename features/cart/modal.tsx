"use client";

import { ShoppingCartIcon } from "lucide-react";
import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import LoadingDots from "@/components/custom/loading-dots";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { createUrl } from "@/lib/utils";
import { DEFAULT_OPTION } from "@/shopify/constants";
import Price from "../_shared/price";
import { handleCheckout } from "./actions";
import { useCart, useCartUI } from "./cart-context";
import { DeleteItemButton } from "./delete-item-button";
import { EditItemQuantityButton } from "./edit-item-quantity-button";

type MerchandiseSearchParams = {
  [key: string]: string;
};

export default function CartModal() {
  const { isOpen, setIsOpen } = useCartUI();
  return (
    <Sheet onOpenChange={setIsOpen} open={isOpen}>
      <Suspense fallback={<CartTriggerSkeleton />}>
        <CartModalTrigger />
      </Suspense>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>My Cart</SheetTitle>
          <SheetDescription className="hidden">
            Review your cart items
          </SheetDescription>
        </SheetHeader>
        <Suspense fallback={<CartContentSkeleton />}>
          <CartModalContent />
        </Suspense>
      </SheetContent>
    </Sheet>
  );
}

function CartTriggerSkeleton() {
  return (
    <Button className="relative" disabled size={"icon-lg"} variant={"outline"}>
      <ShoppingCartIcon />
    </Button>
  );
}

function CartContentSkeleton() {
  return (
    <div className="mt-20 flex w-full flex-col items-center justify-center">
      <LoadingDots className="bg-blue-600" />
    </div>
  );
}

function CartModalTrigger() {
  const { cart, isOpen, setIsOpen } = useCart();
  const quantityRef = useRef(cart?.totalQuantity);

  useEffect(() => {
    const currentQuantity = cart?.totalQuantity || 0;
    const prevQuantity = quantityRef.current || 0;

    if (currentQuantity > prevQuantity && !isOpen) {
      setIsOpen(true);
    }
    quantityRef.current = currentQuantity;
  }, [cart?.totalQuantity, isOpen, setIsOpen]);

  return (
    <SheetTrigger asChild>
      <Button className="relative" size={"icon-lg"} variant={"outline"}>
        <ShoppingCartIcon />
        {cart?.totalQuantity ? (
          <div className="absolute top-0 right-0 -mt-2 -mr-2 flex h-4 w-4 items-center justify-center rounded-sm bg-blue-600 font-medium text-[11px] text-white">
            {cart?.totalQuantity}
          </div>
        ) : null}
      </Button>
    </SheetTrigger>
  );
}

function CartModalContent() {
  const { cart, updateCartItem, closeCart } = useCart();

  if (!cart || cart.lines.length === 0) {
    return (
      <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden p-4">
        <ShoppingCartIcon className="h-16" />
        <p className="mt-6 text-center font-bold text-2xl">
          Your cart is empty.
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col justify-between overflow-hidden p-4">
      <ul className="grow overflow-auto">
        {cart.lines
          .sort((a, b) =>
            a.merchandise.product.title.localeCompare(
              b.merchandise.product.title
            )
          )
          .map((item, i) => {
            const merchandiseSearchParams = {} as MerchandiseSearchParams;

            for (const { name, value } of item.merchandise.selectedOptions) {
              if (value !== DEFAULT_OPTION) {
                merchandiseSearchParams[name.toLowerCase()] = value;
              }
            }

            const merchandiseUrl = createUrl(
              `/product/${item.merchandise.product.handle}`,
              new URLSearchParams(merchandiseSearchParams)
            );

            return (
              <li
                className="flex w-full flex-col border-neutral-300 border-b dark:border-neutral-700"
                key={item.id || i}
              >
                <div className="relative flex w-full flex-row justify-between px-1 py-4">
                  <div className="absolute z-40 -mt-2 -ml-1">
                    <DeleteItemButton
                      item={item}
                      optimisticUpdate={updateCartItem}
                    />
                  </div>
                  <div className="flex flex-row">
                    <div className="relative h-16 w-16 overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                      <Image
                        alt={
                          item.merchandise.product.featuredImage.altText ||
                          item.merchandise.product.title
                        }
                        className="h-full w-full object-cover"
                        height={64}
                        src={item.merchandise.product.featuredImage.url}
                        width={64}
                      />
                    </div>
                    <Link
                      className="z-30 ml-2 flex flex-row space-x-4"
                      href={merchandiseUrl as Route}
                      onClick={closeCart}
                    >
                      <div className="flex flex-1 flex-col text-base">
                        <span className="leading-tight">
                          {item.merchandise.product.title}
                        </span>
                        {item.merchandise.title !== DEFAULT_OPTION ? (
                          <p className="text-neutral-500 text-sm dark:text-neutral-400">
                            {item.merchandise.title}
                          </p>
                        ) : null}
                      </div>
                    </Link>
                  </div>
                  <div className="flex h-16 flex-col justify-between">
                    <Price
                      amount={item.cost.totalAmount.amount}
                      className="flex justify-end space-y-2 text-right text-sm"
                      currencyCode={item.cost.totalAmount.currencyCode}
                    />
                    <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700">
                      <EditItemQuantityButton
                        item={item}
                        optimisticUpdate={updateCartItem}
                        type="minus"
                      />
                      <p className="w-6 text-center">
                        <span className="w-full text-sm">{item.quantity}</span>
                      </p>
                      <EditItemQuantityButton
                        item={item}
                        optimisticUpdate={updateCartItem}
                        type="plus"
                      />
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
      <div className="py-4 text-neutral-500 text-sm dark:text-neutral-400">
        <div className="mb-3 flex items-center justify-between border-neutral-200 border-b pb-1 dark:border-neutral-700">
          <p>Taxes</p>
          <Price
            amount={cart.cost.totalTaxAmount.amount}
            className="text-right text-base text-black dark:text-white"
            currencyCode={cart.cost.totalTaxAmount.currencyCode}
          />
        </div>
        <div className="mb-3 flex items-center justify-between border-neutral-200 border-b pt-1 pb-1 dark:border-neutral-700">
          <p>Shipping</p>
          <p className="text-right">Calculated at checkout</p>
        </div>
        <div className="mb-3 flex items-center justify-between border-neutral-200 border-b pt-1 pb-1 dark:border-neutral-700">
          <p>Total</p>
          <Price
            amount={cart.cost.totalAmount.amount}
            className="text-right text-base text-black dark:text-white"
            currencyCode={cart.cost.totalAmount.currencyCode}
          />
        </div>
      </div>
      <form action={handleCheckout}>
        <CheckoutButton />
      </form>
    </div>
  );
}

function CheckoutButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="block w-full rounded-full bg-brand p-3 text-center font-medium text-sm text-white opacity-90 hover:bg-brand-hover hover:opacity-100"
      disabled={pending}
      type="submit"
    >
      {pending ? <LoadingDots className="bg-white" /> : "Proceed to Checkout"}
    </button>
  );
}
