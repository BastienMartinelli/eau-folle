import { notFound } from "next/navigation";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import { PageContent } from "@/components/PageContent";
import { withMaintenance } from "@/components/Maintainance";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { Product } from "@/sanity/types";

type ProductPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const products = await client.fetch<Product[]>(
    "*[_type == 'product' && defined(slug.current)]{ slug }",
  );
  return products.map((product) => ({ slug: product.slug!.current }));
}

async function ProductPage({ params }: ProductPageProps) {
  const [product] = await client.fetch<Product[]>(
    "*[_type == 'product' && slug.current == $slug]",
    { slug: params.slug },
  );

  if (!product) {
    notFound();
  }

  const imageUrl = product.mainImage
    ? urlForImage(product.mainImage, 1200)
    : undefined;

  return (
    <Container className="text-lg">
      <Breadcrumb
        items={[
          { label: "Notre gamme", href: "/gamme" },
          { label: product.name ?? "Produit" },
        ]}
      />
      <Heading>{product.name}</Heading>

      <div className="flex flex-col gap-10 md:flex-row md:items-start">
        <div className="flex flex-col items-start gap-8 md:flex-1">
          <div className="flex flex-wrap gap-8 text-gray-700">
            <div>
              <div className="text-xs uppercase tracking-wide text-gray-500">
                Titrage
              </div>
              <div className="text-xl">
                <strong>{product.strength}°</strong>
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-gray-500">
                Volume
              </div>
              <div className="text-xl">
                <strong>
                  {product.volume?.map((v) => `${v}L`).join(", ")}
                </strong>
              </div>
            </div>
            {product.category && (
              <div>
                <div className="text-xs uppercase tracking-wide text-gray-500">
                  Catégorie
                </div>
                <div className="text-xl">
                  <strong>{product.category}</strong>
                </div>
              </div>
            )}
          </div>
          <hr className="w-full border-gray-200" />
          <PageContent>{product.description}</PageContent>
          {product.link && (
            <Button
              as="a"
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Commander
            </Button>
          )}
        </div>
        {imageUrl && (
          <div className="relative aspect-[9/15] w-full overflow-hidden rounded-3xl shadow-2xl md:w-[460px] md:shrink-0 lg:w-[540px]">
            <Image
              src={imageUrl}
              alt={product.mainImage?.alt ?? ""}
              fill
              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 460px, 540px"
              quality={75}
              className="object-cover"
            />
          </div>
        )}
      </div>
    </Container>
  );
}

export default withMaintenance(ProductPage, "gamme");
