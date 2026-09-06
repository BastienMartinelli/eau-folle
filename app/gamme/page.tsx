import ProductCard from "@/components/ProductCard";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Pills from "@/components/Pills";
import CategorySection from "@/components/CategorySection";
import { Pages, Product } from "@/sanity/types";
import { client } from "@/sanity/lib/client";
import { PageContent } from "@/components/PageContent";
import { withMaintenance } from "@/components/Maintainance";

type GammeProps = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

async function Gamme({ searchParams }: GammeProps) {
  const [page] = await client.fetch<Pages[]>(
    "*[_type == 'pages' && name == 'gamme'] ",
  );
  const products =
    (await client.fetch<Product[]>("*[_type == 'product']")) ?? [];

  const byGamme = products.reduce((acc, val) => {
    const category = val.category ?? "";
    if (acc[category]) {
      acc[category].push(val);
    } else {
      acc[category] = [val];
    }
    return acc;
  }, {} as Record<string, Product[]>);

  const categories = Object.keys(byGamme).filter(Boolean);

  const requested =
    typeof searchParams?.category === "string" ? searchParams.category : null;
  const activeCategory =
    requested && categories.includes(requested) ? requested : null;

  return (
    <>
      <style>{`
      .product-list {
        display: grid;
        gap: 54px;
        grid-template-columns: repeat(auto-fill, minmax(340px, 500px));
      }
    `}</style>
      <Container>
        <Heading>{page?.title ?? "Notre gamme"}</Heading>
        <div className="mb-8 text-lg">
          <PageContent>{page?.content}</PageContent>
        </div>
        {categories.length > 0 && (
          <Pills
            items={categories}
            selected={activeCategory}
            className="mt-14"
          />
        )}
        {Object.entries(byGamme).map(([category, items]) => (
          <CategorySection
            key={category}
            category={category}
            active={activeCategory}
          >
            <h2
              className="text-3xl mb-12 mt-16 font-medium text-primary"
              id={category}
            >
              {category}
            </h2>
            <ul aria-labelledby={category} className="product-list">
              {items.map((product) => (
                <ProductCard
                  key={product._id}
                  name={product.name}
                  volume={product.volume}
                  strength={product.strength}
                  mainImage={product.mainImage}
                  link={product.link}
                >
                  {product.description}
                </ProductCard>
              ))}
            </ul>
          </CategorySection>
        ))}
      </Container>
    </>
  );
}

export default withMaintenance(Gamme, "gamme");
