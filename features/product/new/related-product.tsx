import { StarIcon } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import Price from "@/features/_shared/price";
import { NewGridTileImage } from "@/features/grid/tile";
import type { Product } from "@/shopify/types";

export function RelatedProduct({ product }: { product: Product }) {
  return (
    <Link
      className="group flex cursor-pointer flex-col gap-3"
      href={`/product/${product.handle}` as unknown as Route}
      prefetch={true}
    >
      <NewGridTileImage
        active={false}
        alt={product.title}
        className="aspect-square w-full rounded-xl border border-muted object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
        height={80}
        isInteractive
        sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
        src={product.featuredImage?.url}
        width={80}
      />
      <div className="flex flex-col items-start gap-1">
        <h2 className="font-medium text-xs capitalize">{product.title}</h2>

        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <StarIcon
              className="size-3 fill-[#e3be2b] text-[#e3be2b]"
              key={index}
            />
          ))}
          <span className="font-normal text-xs underline underline-offset-2">
            1.6K ratings
          </span>
        </div>
        <div className="flex items-center gap-2 font-medium text-xs">
          <Price
            amount={product.priceRange.minVariantPrice.amount}
            currencyCode={product.priceRange.minVariantPrice.currencyCode}
            currencyCodeClassName="hidden @[275px]/label:inline"
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
    </Link>
  );
}
