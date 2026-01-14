import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getProductRecommendations } from "@/shopify";
import { ProductCard } from "./card";
export default async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) {
    return null;
  }
  return (
    <div className="rounded-lg bg-white py-6 lg:p-6 lg:px-8">
      <Carousel>
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-xl">Related Products</h2>

            <div className="flex space-x-2">
              <CarouselPrevious className="relative inset-0 h-8 w-8 translate-x-0 translate-y-0 text-gray-700" />
              <CarouselNext className="relative inset-0 h-8 w-8 translate-x-0 translate-y-0 text-gray-700" />
            </div>
          </div>

          <CarouselContent>
            {relatedProducts.map((product) => (
              <CarouselItem
                className="sm:basis-1/2 md:basis-1/4 lg:basis-1/5"
                key={product.id}
              >
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </div>
  );
}
