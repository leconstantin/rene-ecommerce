"use client";

import { siteConfig } from "@/config/site";

export default function FooterDate() {
  return (
    <p>
      © {new Date().getFullYear()} {siteConfig.name}.
    </p>
  );
}
