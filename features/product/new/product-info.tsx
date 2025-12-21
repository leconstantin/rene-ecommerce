"use client";

import { HeartIcon, ShareIcon, StarIcon, TruckIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ProductReviews from "../new/product-reviews";
import ProductQuantity from "../new/quantity";
import { RefundSheet } from "../new/refund-sheet";
import { DescriptionSheet } from "./description-sheet";

const colors = [
  { name: "Indigo", color: "#6366f1" },
  { name: "Blue", color: "#2563eb" },
  { name: "Green", color: "#4ade80" },
  { name: "Red", color: "#ef4444" },
];

const sizes = ["XS", "S", "M", "L", "XL"];
const description = ` Wrap yourself in Comfrt and unplug with Airplane Mode. Made from our
          ultra-soft Combed Cotton Blend™, this hoodie is built for long flights
          and even longer naps. A built-in contoured eyemask lets you snooze in
          peace, while zip sleeve pockets keep your phone and other essentials
          secure.`;
export default function ProductInfo() {
  const [activeColor, setActiveColor] = useState("Indigo");
  const currentColor = colors.find((c) => c.name === activeColor);
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Share Link Copied");
  };
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
          <div className="flex items-center gap-2 font-medium text-base">
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
            {colors.map((c) => (
              <button
                className={cn(
                  "rounded-full p-0.5 ring ring-muted hover:ring-black",
                  activeColor === c.name ? "ring-black" : ""
                )}
                key={c.name}
                onClick={() => setActiveColor(c.name)}
                type="button"
              >
                <div
                  className={`size-8 rounded-full bg-${c.color} hover:bg-${c.color}`}
                  style={{ backgroundColor: c.color }}
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
        <Button
          className="rounded-full bg-[#5433eb] hover:bg-[#4524db]"
          size="xl"
        >
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
          <Button
            className="flex-1 rounded-full"
            onClick={handleShare}
            size="lg"
            variant={"outline"}
          >
            <ShareIcon />
            Share
          </Button>
        </div>
      </div>
      <div>
        <p className="text-foreground/90 leading-5">
          {/* show only 20 words in decsription and if it its lenghth is more than that show view more btn */}
          {description.length > 200 ? (
            <>
              {description.slice(0, 200)}
              <DescriptionSheet />
            </>
          ) : (
            description
          )}
        </p>
      </div>
      <RefundSheet />
      <ProductReviews />
    </div>
  );
}
