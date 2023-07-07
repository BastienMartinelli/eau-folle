import ProductCard from "@/components/ProductCard";
import gammes, { GammeItem } from "../../data/gammes";
import Container from "@/components/Container";

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
      {Object.entries(byGamme).map(([category, items]) => (
        <div key={category}>
          <h2 className="text-3xl mb-12" id={category}>
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
