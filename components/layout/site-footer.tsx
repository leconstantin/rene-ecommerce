import type { Route } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { footerLinks } from "@/config/data";
import { getMenu } from "@/shopify";
import FooterDate from "./footer-date";

export async function SiteFooter() {
  const menu = await getMenu("nextjs-footer-menu");
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
          {menu && menu.length > 0 ? (
            <ul className="space-y-3">
              {menu.map((item) => (
                <li key={item.title}>
                  <Link
                    className="font-medium text-white/95 text-xs capitalize underline-offset-2 hover:text-white hover:underline"
                    href={item.path as Route}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="flex max-w-3xl flex-col gap-5 text-white/80 text-xs lg:flex-row lg:items-center">
          <Suspense>
            <FooterDate />
          </Suspense>
          <a
            href="http://rathon-rw.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Built by Rathon
          </a>
        </div>
      </div>
    </footer>
  );
}
