import { StarIcon } from "lucide-react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { NewGridTileImage } from "@/features/grid/tile";
export default function RelatedProducts() {
  return (
    <div className="rounded-lg bg-white py-6 lg:p-6 lg:px-8">
      <Carousel>
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-xl">Related Products</h2>

            <div className="flex space-x-2">
              <CarouselPrevious className="relative inset-0 h-8 w-8 translate-x-0 translate-y-0 text-gray-700" />
              <CarouselNext className="relative inset-0 h-8 w-8 translate-x-0 translate-y-0 text-gray-700" />
            </div>
          </div>

          <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem
                className="sm:basis-1/2 md:basis-1/4 lg:basis-1/6"
                key={index}
              >
                <RelatedProduct />
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </div>
  );
}

function RelatedProduct() {
  return (
    <Link
      className="group flex cursor-pointer flex-col gap-3"
      href={"/product/fff"}
      type="button"
    >
      <NewGridTileImage
        active={false}
        alt={"my product"}
        className="aspect-square w-full rounded-xl object-cover group-hover:scale-105"
        height={80}
        isInteractive
        src={"/p1.webp"}
        width={80}
      />
      <div className="flex flex-col items-start gap-1">
        <h2 className="font-medium text-xs">Airplane Mode Travel Hoodie</h2>
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
          <p>$65.00</p>
          <p className="text-muted-foreground line-through">$120.00</p>
        </div>
      </div>
    </Link>
  );
}
