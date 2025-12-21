import { ImagesCarousel } from "@/features/product/new/images-carousel";
import ProductInfo from "@/features/product/new/product-info";
import RelatedProducts from "@/features/product/new/related-products";

export default function TestPage() {
  return (
    <div className="container min-h-screen space-y-5 bg-white py-4 lg:bg-transparent">
      <div className="flex min-h-screen w-full flex-col rounded-lg bg-white lg:flex-row">
        <div className="basis-full py-6 lg:basis-4/7 lg:p-6 lg:px-8">
          <ImagesCarousel />
        </div>

        <div className="basis-full py-6 md:mx-auto md:max-w-xl lg:max-w-full lg:basis-3/7 lg:p-6">
          <ProductInfo />
        </div>
      </div>
      <RelatedProducts />
    </div>
  );
}
