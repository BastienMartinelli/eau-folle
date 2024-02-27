import ProductCard from "@/components/ProductCard";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import { Pages, Product } from "@/sanity/types";
import { client } from "@/sanity/lib/client";
import { PageContent } from "@/components/PageContent";

export default async function Gamme() {
  const [page] = await client.fetch<Pages[]>(
    "*[_type == 'pages' && name == 'gamme'] "
  );
  const products = await client.fetch<Product[]>("*[_type == 'product']");

  const byGamme = products.reduce(
    (acc, val) => {
      const category = val.categorty ?? "";
      if (acc[category]) {
        acc[category].push(val);
      } else {
        acc[category] = [val];
      }
      return acc;
    },
    {} as Record<string, Product[]>
  );

  return (
    <>
      <style>{`
      .product-list {
        display: grid;
        gap: 54px;
        grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      }
    `}</style>
      <Container>
        <Heading>{page.title}</Heading>
        <div className="mb-16 text-lg">
          <PageContent>{page.content}</PageContent>
        </div>
        {Object.entries(byGamme).map(([category, items]) => (
          <div key={category}>
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
                >
                  {product.description}
                </ProductCard>
              ))}
            </ul>
          </div>
        ))}
      </Container>
    </>
  );
}
