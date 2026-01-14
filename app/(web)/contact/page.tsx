import type { Metadata } from "next";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { siteConfig } from "@/config/site";
import coverImage from "@/public/about.png";

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
              className="h-full w-full rounded-lg object-cover object-top"
              fill
              src={coverImage}
            />
          </AspectRatio>
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <h1 className="font-bold text-2xl">Contact</h1>
          <p>Please contact us with any questions or concerns.</p>

          <a
            className="text-sm"
            href="mailto:karanganwarene1@gmail.com"
            rel="noopener"
          >
            <p>General</p>
            <p className="text-foreground/80">karanganwarene1@gmail.com</p>
          </a>

          <a
            className="text-sm"
            href={siteConfig.links.instagram}
            rel="noopener noreferrer"
            target="_blank"
          >
            <p>Instagram</p>
            <p className="text-foreground/80">karanganwastore</p>
          </a>
          <a
            className="text-sm"
            href={siteConfig.links.tiktok}
            rel="noopener noreferrer"
            target="_blank"
          >
            <p>Tiktok</p>
            <p className="text-foreground/80">@karanganwastore</p>
          </a>
        </div>
      </div>
    </div>
  );
}
