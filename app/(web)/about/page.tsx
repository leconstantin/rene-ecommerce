import type { Metadata } from "next";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import coverImage from "@/public/contact.webp";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Us",
};
export default function About() {
  return (
    <div className="container w-full py-10">
      <div className="flex w-full flex-col justify-between gap-8 md:px-4 lg:flex-row-reverse lg:px-8">
        <div className="flex flex-1">
          <AspectRatio className="rounded-lg bg-muted" ratio={424 / 283}>
            <Image
              alt="Photo by Drew Beamer"
              className="h-full w-full rounded-lg object-cover"
              fill
              src={coverImage}
            />
          </AspectRatio>
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <h1 className="font-bold text-2xl">About Us</h1>

          <p className="text-foreground/80">
            Justin Reed is an e-commerce and consignment shop for contemporary
            and vintage clothing, high-end fashion, art, and accessories. With
            studios in Los Angeles and New York, we are a digital-centric
            boutique shipping worldwide and offering a highly curated catalog of
            pieces that appeal to a wide range of buyers. Whether you are buying
            or selling with us, we believe in providing the highest quality
            experience and world-class customer service.
          </p>

          <p className="text-foreground/80">
            We operate at the intersection of fashion, art, and design, and help
            our select clients build and manage their personal collections. We
            pride ourselves on our unrivaled catalog of items and the quality of
            our service from beginning to end. As a consignment partner, we
            offer a hands-on and worry-free approach committed to delivering the
            best result to every one of our customers.
          </p>

          <p className="text-foreground/80">
            The company was founded in 2017 by Justin Reed. His mission is to
            create a one-stop boutique and consignment shop that provides a
            fresh and forward-thinking approach to discovering and buying
            clothing and art.
          </p>
        </div>
      </div>
    </div>
  );
}
