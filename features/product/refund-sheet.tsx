import { SquareArrowLeftIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function RefundSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="w-fit rounded-full" size="lg" variant={"outline"}>
          <SquareArrowLeftIcon />
          Refund Policy
        </Button>
      </SheetTrigger>
      <SheetContent
        className="w-full lg:fixed lg:top-5 lg:right-5 lg:bottom-5 lg:h-[calc(100vh-2rem)] lg:max-w-[490px] lg:rounded-2xl"
        showCloseButton={false}
      >
        <SheetHeader>
          <SheetClose asChild>
            <Button className="rounded-full" size="icon-lg" variant={"outline"}>
              <XIcon />
            </Button>
          </SheetClose>
          <SheetTitle className="text-4xl">Refund Policy</SheetTitle>
          <SheetDescription className="sr-only">
            Policy for refunding products
          </SheetDescription>
        </SheetHeader>
        <div className="no-scrollbar overflow-y-auto px-4 lg:px-6">
          {Array.from({ length: 10 }).map((_, index) => (
            <p className="mb-4 text-foreground/80 leading-normal" key={index}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          ))}
        </div>
        <SheetFooter className="p-2" />
      </SheetContent>
    </Sheet>
  );
}
