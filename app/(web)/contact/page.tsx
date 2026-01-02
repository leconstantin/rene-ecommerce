import type { Metadata } from "next";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import coverImage from "@/public/contact.webp";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Us",
};
export default function Contact() {
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
          <h1 className="font-bold text-2xl">Contact</h1>
          <p>Please contact us with any questions or concerns.</p>

          <div className="text-sm">
            <p>General</p>
            <p className="text-foreground/80">help@renestore.com</p>
          </div>

          <div className="text-sm">
            <p>Consignment</p>
            <p className="text-foreground/80">sell@renestore.com</p>
          </div>

          <div className="text-sm">
            <p>Phone</p>
            <p className="text-foreground/80">+250 788 243 445</p>
          </div>
        </div>
      </div>
    </div>
  );
}
