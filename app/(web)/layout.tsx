import Cta from "@/components/layout/cta";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function AppLayout(props: LayoutProps<"/">) {
  return (
    <div className="relative z-10 flex min-h-svh flex-col bg-background font-roboto dark:bg-black">
      <SiteHeader />
      <main className="container-wrapper flex min-h-screen flex-1 flex-col">
        {props.children}
      </main>
      <Cta />
      <SiteFooter />
    </div>
  );
}
