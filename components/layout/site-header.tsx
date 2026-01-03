import Link from "next/link";
import { Suspense } from "react";
import LogoSquare from "@/components/icons/logo-square";
import { siteConfig } from "@/config/site";
import CartModal from "@/features/cart/modal";
import { getMenu } from "@/shopify/index";
import MenuItems from "./menu-items";
import MobileMenu from "./mobile-menu";
import Search, { SearchSkeleton } from "./search";

export async function SiteHeader() {
  const menu = await getMenu("frontend-header-menu");

  return (
    <nav className="container relative flex items-center justify-between py-4">
      <div className="block flex-none md:hidden">
        <Suspense fallback={null}>
          <MobileMenu menu={menu} />
        </Suspense>
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Link
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
            href="/"
            prefetch={true}
          >
            <LogoSquare />
            <div className="ml-2 flex-none font-medium text-sm uppercase md:hidden lg:block">
              {siteConfig.name}
            </div>
          </Link>
          <Suspense fallback={null}>
            <MenuItems menu={menu} />
          </Suspense>
        </div>
        <div className="hidden justify-center md:flex md:w-1/3">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>
        <div className="flex items-center justify-end gap-4 md:w-1/3">
          {/* <Button className="text-sm" size="icon-lg" variant={"outline"}>
            <ShoppingCartIcon />
          </Button> */}
          <CartModal />
        </div>
      </div>
    </nav>
  );
}
