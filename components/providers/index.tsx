"use client";
import { Toaster } from "@/components/ui/sonner";
import { TailwindIndicator } from "../custom/tailwind-indicator";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster closeButton expand position="bottom-right" />
      <TailwindIndicator />
    </>
  );
}
