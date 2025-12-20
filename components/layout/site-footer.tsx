import { ArrowUpRightIcon } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { Suspense } from "react";

import { ThemeSwitcher } from "@/components/custom/theme-switcher";
import { footerLinks } from "@/config/data";
import { siteConfig } from "@/config/site";
import FooterDate from "./footer-date";

export function SiteFooter() {
  return (
    <footer>
      <div className="h-full w-full border-t bg-background dark:bg-black">
        <div className="px-2">
          <div className="container flex flex-col gap-2 py-8 pb-20 md:py-12 xl:gap-4">
            <div className="flex justify-between">
              <div className="flex flex-1 flex-col gap-4">
                <Link
                  className="font-mono font-semibold text-xl capitalize italic tracking-tighter md:text-2xl"
                  href={"/"}
                >
                  {siteConfig.name}
                </Link>
                <p className="max-w-xs text-muted-foreground tracking-tight">
                  {siteConfig.name} is the next step on our mission to make
                  commerce better for everyone.
                </p>
              </div>
              <div className="flex flex-1 justify-between">
                {footerLinks.map((link) => (
                  <div
                    className="space-y-4 text-sm lg:col-span-2"
                    key={link.title}
                  >
                    <span className="block font-medium">{link.title}</span>
                    <ul className="space-y-3">
                      {link.links.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href as Route}
                            {...(item.external
                              ? {
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                }
                              : {})}
                            className="group relative flex w-fit items-center gap-0.5 text-muted-foreground text-sm leading-5 duration-150 hover:text-primary"
                          >
                            {item.name}
                            {item.external && (
                              <ArrowUpRightIcon className="size-4" />
                            )}
                            <span className="absolute bottom-0.5 left-0 block h-px w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 flex w-full items-center justify-between gap-5">
              <Suspense>
                <FooterDate />
              </Suspense>

              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
