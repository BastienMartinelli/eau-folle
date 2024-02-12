import ProductCard from "@/components/ProductCard";
import gammes, { GammeItem } from "@/data/gammes";
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
    <Container>
      <Heading>{page.title}</Heading>
      <div className="mb-16 text-lg">
        <PageContent>{page.content}</PageContent>
      </div>
      <br />

      {Object.entries(byGamme).map(([category, items]) => (
        <div key={category}>
          <h2
            className="text-3xl mb-12 font-medium text-gray-600"
            id={category}
          >
            {category}
          </h2>
          <ul aria-labelledby={category}>
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
  );
}
