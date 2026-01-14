"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { GridTileImage } from "@/features/grid/tile";
import type { Image as ShopifyImage } from "@/shopify/types";

export function ImagesCarousel({ images }: { images: ShopifyImage[] }) {
  const [activeImage, setActiveImage] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  useEffect(() => {
    if (!api) {
      return;
    }

    setActiveImage(api.selectedScrollSnap());

    api.on("select", () => {
      setActiveImage(api.selectedScrollSnap());
    });
  }, [api]);

  const handleSelect = (index: number) => {
    if (!api) {
      return;
    }
    api.scrollTo(index);
  };
  return (
    <div className="top-6 flex gap-2 lg:sticky">
      <div className="hidden flex-col gap-2 md:flex">
        {images.slice(0, 6).map((image, index) => (
          <li className="size-16 list-none" key={image.url}>
            <button
              className="h-full w-full cursor-pointer"
              onClick={() => handleSelect(index)}
              type="button"
            >
              <GridTileImage
                active={activeImage === index}
                alt={image.altText}
                className="object-cover"
                height={80}
                src={image.url}
                width={80}
              />
            </button>
          </li>
        ))}
      </div>
      <div className="mx-auto max-w-lg">
        <Carousel className="w-full md:basis-1/2" setApi={setApi}>
          <CarouselContent>
            {images.map((image) => (
              <CarouselItem key={image.url}>
                <CardContent className="mx-auto flex aspect-auto max-w-sm items-center justify-center p-0">
                  <Image
                    alt={image.altText}
                    className="h-full w-full rounded-xl object-cover"
                    height={511}
                    src={image.url}
                    width={383}
                  />
                </CardContent>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
