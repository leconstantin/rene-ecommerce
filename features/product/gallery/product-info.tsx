"use client";

import {
  HeartIcon,
  ShareIcon,
  SquareArrowLeftIcon,
  StarIcon,
  TruckIcon,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ProductReviews from "./product-reviews";
import ProductQuantity from "./quantity";

const colors = [
  { name: "Indigo", color: "indigo-500" },
  { name: "Blue", color: "blue-600" },
  { name: "Green", color: "green-400" },
  { name: "Red", color: "red-500" },
];
const sizes = ["XS", "S", "M", "L", "XL"];
export default function ProductInfo() {
  const [activeColor, setActiveColor] = useState("Indigo");
  const currentColor = colors.find((c) => c.name === activeColor);
  return (
    <div className="flex flex-col gap-6">
      {/* product */}
      <div className="flex flex-col gap-4">
        {/* {product name and price} */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-start gap-1.5">
            <h2 className="font-medium text-2xl">
              Airplane Mode Travel Hoodie
            </h2>
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon
                  className="size-4 fill-[#e3be2b] text-[#e3be2b]"
                  key={index}
                />
              ))}
              <span className="font-normal text-xs underline underline-offset-2">
                1.6K ratings
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 font-medium text-[16px]">
            <p>$65.00</p>
            <p className="text-muted-foreground line-through">$120.00</p>
          </div>
        </div>
        {/* {shipping info} */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <TruckIcon className="size-4" />
            <p className="text-sm">Shipping calculated at checkout</p>
          </div>
          <p className="text-blue-600 text-sm">Add address</p>
        </div>
      </div>
      {/* product options */}
      <div className="flex flex-col gap-4">
        {/* colors */}
        <div className="space-y-2">
          <p className="text-sm capitalize">
            <span className="font-medium">Colors</span> {currentColor?.name}
          </p>
          <div className="flex items-center gap-3">
            {colors.map((color) => (
              <button
                className={cn(
                  "rounded-full p-0.5 ring ring-muted hover:ring-black",
                  activeColor === color.name ? "ring-black" : ""
                )}
                key={color.name}
                onClick={() => setActiveColor(color.name)}
                type="button"
              >
                <div
                  className={`size-8 rounded-full bg-${color.color} hover:bg-${color.color}`}
                />
              </button>
            ))}
          </div>
        </div>
        {/* sizes */}
        <div className="space-y-2">
          <p className="text-sm capitalize">
            <span className="font-medium">Sizes</span> XL
          </p>
          <div className="flex items-center gap-3">
            {sizes.map((size) => (
              <Button
                className="rounded-full font-medium ring ring-muted hover:bg-transparent hover:ring-black"
                key={size}
                variant={"outline"}
              >
                {size}
              </Button>
            ))}
          </div>
        </div>
        {/* quantity */}
        <div className="space-y-2">
          <p className="font-medium text-sm capitalize">Quantity</p>
          <ProductQuantity />
        </div>
      </div>
      {/* product actions */}
      <div className="flex flex-col gap-2.5">
        <Button className="rounded-full bg-[#5433eb]" size="xl">
          Add to cart
        </Button>
        <Button className="rounded-full" size="xl">
          Buy now
        </Button>
        <div className="flex w-full gap-2.5">
          <Button className="flex-1 rounded-full" size="lg" variant={"outline"}>
            <HeartIcon />
            Save
          </Button>
          <Button className="flex-1 rounded-full" size="lg" variant={"outline"}>
            <ShareIcon />
            Share
          </Button>
        </div>
      </div>
      <div>
        <p className="line-clamp-3 text-foreground/90 leading-5">
          Wrap yourself in Comfrt and unplug with Airplane Mode. Made from our
          ultra-soft Combed Cotton Blend™, this hoodie is built for long flights
          and even longer naps. A built-in contoured eyemask lets you snooze in
          peace, while zip sleeve po
        </p>
      </div>
      <Button className="w-fit rounded-full" size="lg" variant={"outline"}>
        <SquareArrowLeftIcon />
        Refund Policy
      </Button>
      <ProductReviews />
    </div>
  );
}
