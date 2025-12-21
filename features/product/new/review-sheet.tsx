import { ArrowRightIcon, StarIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
import { userReviews } from "@/config/data";

export function ReviewSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="rounded-full" size="icon-lg" variant={"outline"}>
          <ArrowRightIcon />
        </Button>
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
          <SheetTitle className="text-4xl">Reviews</SheetTitle>
          <SheetDescription asChild className="text-primary">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-3xl">4.8</p>
                <p className="text-muted-foreground text-sm">1.6k rating</p>
              </div>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon
                    className="size-4 fill-[#e3be2b] text-[#e3be2b]"
                    key={index}
                  />
                ))}
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
        <div className="no-scrollbar overflow-y-auto px-4 lg:px-6">
          <div className="flex flex-col gap-5">
            {userReviews.map((r, i) => (
              <Card key={i}>
                <CardContent className="space-y-5">
                  <p className="text-sm leading-5 tracking-tight">
                    {r.content}
                  </p>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: r.reviews }).map((_, index) => (
                        <StarIcon
                          className="size-3 fill-[#e3be2b] text-[#e3be2b]"
                          key={index}
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-xs">
                      {r.name} ·{r.when}{" "}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <SheetFooter className="p-2" />
      </SheetContent>
    </Sheet>
  );
}
