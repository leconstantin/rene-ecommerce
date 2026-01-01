import type { Route } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { footerLinks } from "@/config/data";
import FooterDate from "./footer-date";

export function SiteFooter() {
  return (
    <footer className="container bg-black text-white">
      <div className="flex flex-col gap-10 py-20 lg:gap-16">
        <p className="max-w-3xl font-medium text-xl">
          An expertly curated selection of art, clothing, and accessories with a
          focus on rare, limited edition collaborations, and exceptional
          vintage.
        </p>
        <div className="flex max-w-xl flex-1 flex-col justify-between gap-6 lg:flex-row">
          {footerLinks.map((link, i) => (
            <ul className="space-y-3" key={i}>
              {link.links.map((item) => (
                <li key={item.name}>
                  <Link
                    className="font-medium text-white/95 text-xs capitalize underline-offset-2 hover:text-white hover:underline"
                    href={item.href as Route}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="flex max-w-3xl flex-col gap-5 text-white/80 text-xs lg:flex-row lg:items-center">
          <Suspense>
            <FooterDate />
          </Suspense>
          <Link href={"/"}>Refund Policy</Link>
          <Link href={"/"}>Terms of Service</Link>
          <Link href={"/"}>Privacy Policy</Link>
          <Link href={"/"}>Site by Rathon</Link>
        </div>
      </div>
    </footer>
  );
}
