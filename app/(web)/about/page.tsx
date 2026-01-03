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
            Karanganwastore is an online marketplace built to make shopping
            easy, reliable, and enjoyable. It connects customers with quality
            products through a smooth digital experience, focusing on trust,
            simplicity, and value.
          </p>
        </div>
      </div>
    </div>
  );
}
