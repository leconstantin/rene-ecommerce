import { ImagesCarousel } from "@/features/product/gallery/images-carousel";
import ProductInfo from "@/features/product/gallery/product-info";

export default function TestPage() {
  return (
    <div className="container py-4">
      <div className="flex min-h-screen w-full flex-col rounded-lg bg-white lg:flex-row">
        <div className="basis-full p-6 px-8 lg:basis-4/7">
          {/* <ProductImage /> */}
          <ImagesCarousel />
        </div>

        <div className="basis-full p-6 lg:basis-3/7">
          <ProductInfo />
        </div>
      </div>
    </div>
  );
}
