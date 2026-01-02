import { XIcon } from "lucide-react";
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

export function DescriptionSheet({
  productDescription,
}: {
  productDescription: string;
}) {
  return (
    <Sheet>
      <SheetTrigger>
        <span className="font-medium text-base text-primary">
          ... View more
        </span>
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
          <SheetTitle className="text-4xl">Description</SheetTitle>
          <SheetDescription className="sr-only">
            Product description
          </SheetDescription>
        </SheetHeader>
        <div className="no-scrollbar overflow-y-auto px-4 lg:px-6">
          <Prose className="text-foreground/90" html={productDescription} />
        </div>
        <SheetFooter className="p-2" />
      </SheetContent>
    </Sheet>
  );
}
