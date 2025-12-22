import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Grid from "@/features/grid";
import { RelatedProduct } from "@/features/product/new/related-product";
import { defaultSort, sorting } from "@/shopify/constants";
import { getCollection, getCollectionProducts } from "@/shopify/index";

export async function generateMetadata(props: {
  params: Promise<{ collection: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const collection = await getCollection(params.collection);

  if (!collection) {
    return notFound();
  }

  return {
    title: collection.seo?.title || collection.title,
    description:
      collection.seo?.description ||
      collection.description ||
      `${collection.title} products`,
  };
}

export default async function CategoryPage(
  props: PageProps<"/search/[collection]">
) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;
  const products = await getCollectionProducts({
    collection: params.collection,
    sortKey,
    reverse,
  });

  return (
    <section>
      {products.length === 0 ? (
        <p className="py-3 text-lg">{"No products found in this collection"}</p>
      ) : (
        <Grid className="animate-fadeIn grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <RelatedProduct key={index} product={product} />
          ))}
        </Grid>
      )}
    </section>
  );
}
