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

const images = [
  { src: "/p1.webp", alt: "Photo by Drew Beamer" },
  { src: "/p2.webp", alt: "Photo by Drew h" },
];

export function ImagesCarousel() {
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
    <div className="sticky top-6 flex gap-2">
      <div className="flex flex-col gap-2">
        {images.map((image, index) => (
          <li className="size-16 list-none" key={image.src}>
            <button
              className="h-full w-full cursor-pointer"
              onClick={() => handleSelect(index)}
              type="button"
            >
              <GridTileImage
                active={activeImage === index}
                alt={image.alt}
                className="object-cover"
                height={80}
                src={image.src}
                width={80}
              />
            </button>
          </li>
        ))}
      </div>
      <div className="mx-auto max-w-lg">
        <Carousel className="w-full" setApi={setApi}>
          <CarouselContent>
            {images.map((image) => (
              <CarouselItem key={image.src}>
                <CardContent className="mx-auto flex aspect-3/4 max-w-sm items-center justify-center p-0">
                  <Image
                    alt={image.alt}
                    className="h-full w-full rounded-xl object-cover"
                    height={511}
                    src={image.src}
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
