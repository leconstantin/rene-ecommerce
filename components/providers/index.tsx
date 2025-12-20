"use client";
import { Toaster } from "@/components/ui/sonner";
import { TailwindIndicator } from "../custom/tailwind-indicator";
import { ThemeProvider } from "./theme-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <Toaster closeButton expand position="bottom-right" />
      <TailwindIndicator />
    </ThemeProvider>
  );
}
