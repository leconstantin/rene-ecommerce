import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getCollectionProducts } from "@/shopify";
import { RelatedProduct } from "../product/new/related-product";
export async function HomeCarousel() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const products = await getCollectionProducts({
    collection: "hidden-home-carousel-products",
  });

  if (!products?.length) {
    return null;
  }

  return (
    // <div className="container w-full overflow-x-auto py-4 pt-1 pb-6">
    //   <CarouselCards carouselProducts={carouselProducts} />
    // </div>
    <div className="rounded-lg bg-white py-6 lg:p-6 lg:px-8">
      <Carousel>
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-xl">New Arrivals</h2>

            <div className="flex space-x-2">
              <CarouselPrevious className="relative inset-0 h-8 w-8 translate-x-0 translate-y-0 text-gray-700" />
              <CarouselNext className="relative inset-0 h-8 w-8 translate-x-0 translate-y-0 text-gray-700" />
            </div>
          </div>

          <CarouselContent>
            {products.map((product) => (
              <CarouselItem
                className="sm:basis-1/2 md:basis-1/4 lg:basis-1/5"
                key={product.id}
              >
                <RelatedProduct product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </div>
  );
}
