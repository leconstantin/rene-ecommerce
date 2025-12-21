import { ArrowRightIcon, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
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
          <Button className="rounded-full" size="icon-lg" variant={"outline"}>
            <ArrowRightIcon />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ProductReviewsCards />
      </CardContent>
    </Card>
  );
}

const userReviews = [
  {
    content: ` The. Red is actually Red and Comfy My sweatshirt arrived fast and
          beautiful 😍 It is beyond my expectations. I love the comfort, the
          quality and fit. The red was true ruby red. I have purchased red items
          in the past that was not truly red but rather pinkish. My Comfy
          sweatshirt matches my red lipstick. I purchased the one with the eye
          visor/ mask. I can't wait to fly somewhere.`,
    name: "Kamilah",
    when: "Yesterday",
    reviews: 5,
  },
  {
    content: ` The. Red is actually Red and Comfy My sweatshirt arrived fast and
          beautiful 😍 It is beyond my expectations. I love the comfort, the
          quality and fit. The red was true ruby red. I have purchased red items
          in the past that was not truly red but rather pinkish. My Comfy
          sweatshirt matches my red lipstick. I purchased the one with the eye
          visor/ mask. I can't wait to fly somewhere.`,
    name: "Lecon",
    when: "4 days ago",
    reviews: 3,
  },
];
export function ProductReviewsCards() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {userReviews.map((r, i) => (
          <CarouselItem
            className="min-h-[170px] w-[200px] max-w-[360px]"
            key={i}
          >
            <Card>
              <CardContent className="space-y-5">
                <p className="line-clamp-3 leading-5 tracking-tight">
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
