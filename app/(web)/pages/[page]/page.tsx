import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Prose from "@/components/custom/prose";
import { getPage, getPages } from "@/shopify";

export async function generateMetadata(props: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = await getPage(params.page);

  if (!page) {
    return notFound();
  }

  return {
    title: page.seo?.title || page.title,
    description: page.seo?.description || page.bodySummary,
    openGraph: {
      publishedTime: page.createdAt,
      modifiedTime: page.updatedAt,
      type: "article",
    },
  };
}
export async function generateStaticParams() {
  const pages = await getPages();

  return pages.map((p) => ({
    page: p.handle,
  }));
}
export default async function Page(props: {
  params: Promise<{ page: string }>;
}) {
  const params = await props.params;
  const page = await getPage(params.page);

  if (!page) {
    return notFound();
  }

  return (
    <>
      <h1 className="mb-8 text-center font-bold text-2xl">{page.title}</h1>
      <Prose className="mb-8 text-foreground/90" html={page.body} />
      <p className="text-sm italic">
        {`This document was last updated on ${new Intl.DateTimeFormat(
          undefined,
          {
            year: "numeric",
            month: "long",
            day: "numeric",
          }
        ).format(new Date(page.updatedAt))}.`}
      </p>
    </>
  );
}
