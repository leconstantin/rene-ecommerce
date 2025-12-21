import { ImagesCarousel } from "@/features/product/gallery/images-carousel";
import ProductInfo from "@/features/product/gallery/product-info";

export default function TestPage() {
  return (
    <div className="container bg-white py-4 lg:bg-transparent">
      <div className="flex min-h-screen w-full flex-col rounded-lg bg-white lg:flex-row">
        <div className="basis-full py-6 lg:basis-4/7 lg:p-6 lg:px-8">
          {/* <ProductImage /> */}
          <ImagesCarousel />
        </div>

        <div className="basis-full py-6 md:mx-auto md:max-w-xl lg:max-w-full lg:basis-3/7 lg:p-6">
          <ProductInfo />
        </div>
      </div>
    </div>
  );
}
