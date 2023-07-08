import ProductCard from "@/components/ProductCard";
import gammes, { GammeItem } from "@/data/gammes";
import Container from "@/components/Container";
import Heading from "@/components/Heading";

const byGamme = gammes.reduce((acc, val) => {
  if (acc[val.type]) {
    acc[val.type].push(val);
  } else {
    acc[val.type] = [val];
  }
  return acc;
}, {} as Record<string, GammeItem[]>);

export default function Gamme() {
  return (
    <Container>
      <Heading>Notre gamme</Heading>
      <p className="mb-4 text-lg">{`Tous nos produits sont fabriqués à partir d'ingrédients issus de l'agriculture biologique.`}</p>
      <p className="mb-4 text-lg">{`Ils sont macérés et/ou fermentés dans nos cuves puis distillés dans nos alambics traditionnels en cuivre.`}</p>
      <p className="mb-16 text-lg">{`Les produits que nous utilisons sont soigneusement sélectionnés, ils sont majoritairement issus de l'agriculture locale et certains sont ramassés par nos soins.`}</p>

      {Object.entries(byGamme).map(([category, items]) => (
        <div key={category}>
          <h2
            className="text-3xl mb-12 font-medium text-gray-600"
            id={category}
          >
            {category}
          </h2>
          <ul aria-labelledby={category}>
            {items
              .filter((i) => !i.hide)
              .map((g) => (
                <ProductCard
                  key={g.id}
                  title={g.name || g.label}
                  titre={g.titre}
                  volume={g.volume}
                  id={g.id}
                >
                  {g.description}
                </ProductCard>
              ))}
          </ul>
        </div>
      ))}
    </Container>
  );
}
