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

// <div className="h-full w-full border-t bg-background dark:bg-black">
//     <div className="px-2">
//       <div className="container flex flex-col gap-2 py-8 pb-20 md:py-12 xl:gap-4">
//         <div className="flex justify-between">
//           <div className="flex flex-1 flex-col gap-4">
//             <Link
//               className="font-mono font-semibold text-xl capitalize italic tracking-tighter md:text-2xl"
//               href={"/"}
//             >
//               {siteConfig.name}
//             </Link>
//             <p className="max-w-xs text-muted-foreground tracking-tight">
//               {siteConfig.name} is the next step on our mission to make
//               commerce better for everyone.
//             </p>
//           </div>
//           <div className="flex flex-1 justify-between">
//             {footerLinks.map((link) => (
//               <div
//                 className="space-y-4 text-sm lg:col-span-2"
//                 key={link.title}
//               >
//                 <span className="block font-medium">{link.title}</span>
//                 <ul className="space-y-3">
//                   {link.links.map((item) => (
//                     <li key={item.name}>
//                       <Link
//                         href={item.href as Route}
//                         {...(item.external
//                           ? {
//                               target: "_blank",
//                               rel: "noopener noreferrer",
//                             }
//                           : {})}
//                         className="group relative flex w-fit items-center gap-0.5 text-muted-foreground text-sm leading-5 duration-150 hover:text-primary"
//                       >
//                         {item.name}
//                         {item.external && (
//                           <ArrowUpRightIcon className="size-4" />
//                         )}
//                         <span className="absolute bottom-0.5 left-0 block h-px w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50" />
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="mt-12 flex w-full items-center justify-between gap-5">
//           <Suspense>
//             <FooterDate />
//           </Suspense>

//           <ThemeSwitcher />
//         </div>
//       </div>
//     </div>
//   </div>
