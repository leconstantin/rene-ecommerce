import { XIcon } from "lucide-react";
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
import Prose from "../prose";

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
        className="fixed top-5 right-5 bottom-5 h-[calc(100vh-2rem)] rounded-2xl lg:max-w-[490px]"
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
          <Prose className="text-foreground/80" html={productDescription} />
        </div>
        <SheetFooter className="p-2" />
      </SheetContent>
    </Sheet>
  );
}
