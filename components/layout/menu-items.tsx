"use client";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { Menu } from "@/shopify/types";

export default function MenuItems({ menu }: { menu: Menu[] }) {
  const pathname = usePathname();
  return (
    <ul className="hidden gap-6 text-sm md:flex md:items-center">
      {menu.map((item: Menu) => (
        <li key={item.title}>
          <Link
            className={cn(
              "text-muted-foreground text-sm underline-offset-4 hover:text-primary hover:underline",
              pathname === item.path ? "font-medium text-primary" : ""
            )}
            href={item.path as Route}
            prefetch={true}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
