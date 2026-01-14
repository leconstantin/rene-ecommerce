import { SquareArrowLeftIcon, XIcon } from "lucide-react";
import Prose from "@/components/custom/prose";
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

export function RefundSheet({ refundBody }: { refundBody: string }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="w-fit flex-1 rounded-full"
          size="lg"
          variant={"outline"}
        >
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
          <Prose className="text-foreground/90" html={refundBody} />
        </div>
        <SheetFooter className="p-2" />
      </SheetContent>
    </Sheet>
  );
}
