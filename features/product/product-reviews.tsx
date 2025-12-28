import { StarIcon } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { userReviews } from "@/config/data";
import { ReviewSheet } from "./review-sheet";

export default function ProductReviews() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-4xl">Reviews</CardTitle>
        <CardDescription className="text-primary">
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
        </CardDescription>
        <CardAction>
          <ReviewSheet />
        </CardAction>
      </CardHeader>
      <CardContent>
        <ProductReviewsCards />
      </CardContent>
    </Card>
  );
}

export function ProductReviewsCards() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {userReviews.map((r, i) => (
          <CarouselItem
            className="min-h-[170px] w-[200px] max-w-[300px] cursor-pointer"
            key={i}
          >
            <Card>
              <CardContent className="space-y-5">
                <p className="line-clamp-2 leading-5 tracking-tight">
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
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
