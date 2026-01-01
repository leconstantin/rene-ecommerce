"use client";

import { HeartIcon, ShareIcon, StarIcon, TruckIcon } from "lucide-react";
import { useActionState, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import Price from "@/features/_shared/price";
import type { Product, ProductVariant } from "@/shopify/types";
import { buyNow } from "../cart/actions";
import { AddToCart } from "../cart/add-to-cart";
import { DescriptionSheet } from "./description-sheet";
import { useProduct } from "./product-context";
import ProductReviews from "./product-reviews";
import { ProductVariantsSelector } from "./product-variants";
import ProductQuantity from "./quantity";
import { RefundSheet } from "./refund-sheet";

export default function ProductInfo({ product }: { product: Product }) {
  const { state } = useProduct();
  const [quantity, setQuantity] = useState(1);
  const [, formAction] = useActionState(buyNow, null);

  // Get selected variant (same logic as AddToCart)
  const variant = product.variants.find((v: ProductVariant) =>
    v.selectedOptions.every(
      (option) => option.value === state[option.name.toLowerCase()]
    )
  );
  const defaultVariantId =
    product.variants.length === 1 ? product.variants[0]?.id : undefined;
  const selectedVariantId = variant?.id || defaultVariantId;
  const handleShare = () => {
    navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_SITE_LOGO}/product/${product.handle}`
    );
    toast.success("Share Link Copied");
  };
  return (
    <div className="flex flex-col gap-6">
      {/* product */}
      <div className="flex flex-col gap-4">
        {/* {product name and price} */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-start gap-1.5">
            <h2 className="font-medium text-2xl">{product.title}</h2>
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
            <Price
              amount={product.priceRange.minVariantPrice.amount}
              currencyCode={product.priceRange.minVariantPrice.currencyCode}
              showCurrencyCode={false}
            />
            <Price
              amount={product.priceRange.minVariantPrice.amount}
              className="text-muted-foreground line-through"
              currencyCode={product.priceRange.minVariantPrice.currencyCode}
              showCurrencyCode={false}
            />
          </div>
        </div>
        {/* {shipping info} */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <TruckIcon className="size-4" />
            <p className="text-sm">Shipping calculated at checkout</p>
          </div>
          <p className="text-brand text-sm">Add address</p>
        </div>
      </div>
      {/* product options */}
      <div className="flex flex-col gap-4">
        <ProductVariantsSelector
          options={product.options}
          variants={product.variants}
        />
        {/* quantity */}
        <div className="space-y-2">
          <p className="font-medium text-sm capitalize">Quantity</p>
          <ProductQuantity quantity={quantity} setQuantity={setQuantity} />
        </div>
      </div>
      {/* product actions */}
      <div className="flex flex-col gap-2.5">
        <AddToCart product={product} quantity={quantity} />

        <form action={formAction} className="w-full">
          <input
            name="selectedVariantId"
            type="hidden"
            value={selectedVariantId}
          />
          <input name="quantity" type="hidden" value={quantity} />
          <Button
            className="w-full rounded-full"
            disabled={!(selectedVariantId && product.availableForSale)}
            size="xl"
            type="submit"
          >
            Buy now
          </Button>
        </form>
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
          {product.description.length > 20 ? (
            <>
              {product.description.slice(0, 20)}
              <DescriptionSheet productDescription={product.descriptionHtml} />
            </>
          ) : (
            product.description
          )}
        </p>
      </div>
      <RefundSheet />
      <ProductReviews />
    </div>
  );
}

//  {/* colors */}
//         {/* <div className="space-y-2">
//           <p className="text-sm capitalize">
//             <span className="font-medium">Colors</span> {currentColor?.name}
//           </p>
//           <div className="flex items-center gap-3">
//             {colors.map((c) => (
//               <button
//                 className={cn(
//                   "rounded-full p-0.5 ring ring-muted hover:ring-black",
//                   activeColor === c.name ? "ring-black" : ""
//                 )}
//                 key={c.name}
//                 onClick={() => setActiveColor(c.name)}
//                 type="button"
//               >
//                 <div
//                   className={`size-8 rounded-full bg-${c.color} hover:bg-${c.color}`}
//                   style={{ backgroundColor: c.color }}
//                 />
//               </button>
//             ))}
//           </div>
//         </div> */}
//         {/* sizes */}
//         {/* <div className="space-y-2">
//           <p className="text-sm capitalize">
//             <span className="font-medium">Sizes</span> XL
//           </p>
//           <div className="flex items-center gap-3">
//             {sizes.map((size) => (
//               <Button
//                 className="rounded-full font-medium ring ring-muted hover:bg-transparent hover:ring-black"
//                 key={size}
//                 variant={"outline"}
//               >
//                 {size}
//               </Button>
//             ))}
//           </div>
//         </div> */}
