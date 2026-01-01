import { Toaster } from "@/components/ui/sonner";
import { CartProvider } from "@/features/cart/cart-context";
import { getCart } from "@/shopify";
import { TailwindIndicator } from "../custom/tailwind-indicator";

export default function Providers({ children }: { children: React.ReactNode }) {
  const cart = getCart();
  return (
    <>
      <CartProvider cartPromise={cart}>{children}</CartProvider>
      <Toaster closeButton expand position="bottom-right" />
      <TailwindIndicator />
    </>
  );
}
