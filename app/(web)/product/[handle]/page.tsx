import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ImagesCarousel } from "@/features/product/images-carousel";
import { ProductProvider } from "@/features/product/product-context";
import ProductInfo from "@/features/product/product-info";
import RelatedProducts from "@/features/product/related-products";
import { getPage, getProduct } from "@/shopify";

export default function ProductPage(props: PageProps<"/product/[handle]">) {
  return (
    <Suspense fallback={null}>
      <SuspendedProduct {...props} />
    </Suspense>
  );
}

async function SuspendedProduct(props: PageProps<"/product/[handle]">) {
  const params = await props.params;
  const product = await getProduct(params.handle);
  const refundPolicy = await getPage("refund-policy");

  if (!product) {
    return notFound();
  }

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      "@type": "AggregateOffer",
      availability: product.availableForSale
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount,
    },
  };
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
        type="application/ld+json"
      />
      <div className="container min-h-screen space-y-4 bg-white py-4 lg:bg-transparent">
        <ProductProvider>
          <div className="flex min-h-screen w-full flex-col rounded-lg bg-white lg:flex-row">
            <div className="basis-full py-6 lg:basis-4/7 lg:p-6 lg:px-8">
              <ImagesCarousel images={product.images} />
            </div>

            <div className="basis-full py-6 md:mx-auto md:max-w-xl lg:max-w-full lg:basis-3/7 lg:p-6">
              <ProductInfo product={product} refundBody={refundPolicy.body} />
            </div>
          </div>
        </ProductProvider>

        <RelatedProducts id={product.id} />
      </div>
    </>
  );
}
