import Hero from "@/components/Hero";
import Map from "@/components/Map";
import Container from "@/components/Container";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero>
        <div className="max-w-screen-xl mx-auto p-4 flex justify-center w-full">
          <Image
            src="/logo.svg"
            alt="L'eau folle logo"
            fill
            style={{ maxWidth: 1000, maxHeight: 1000 }}
            className="m-auto"
          />
        </div>
      </Hero>
      <Container className="pb-24">
        <p className="mb-3 text-xl">
          {`La Distillerie l'Eau Folle est une jeune distillerie installée dans le
          centre de Moutiers.`}
        </p>
        <p>
          {`Nous avons pris la décision de travailler avec des produits locaux,
          que nous ramassons, pour la plupart, par nos soins.`}
        </p>
        <p>
          {`Notre gamme est ainsi évolutive mais conserve néanmoins un éventail de
          produits disponibles tout au long de l'année.`}
        </p>
        <p>
          {`Nous travaillons dans nos locaux avec des méthodes de fabrication
          traditionnelles et sur des alambics à repasse en cuivre.`}
        </p>
        <p>
          {`Les produits que nous proposons sont élaborées à partir de recettes
          que nous avons mises au point et peaufinées.`}
        </p>
        <p>
          {`Nous sommes disponibles, à l'écoute et joignables pour répondre à
          toutes vos demandes concernant nos produits, leur tarification, leur
          commande et leur livraison ou expédition.`}
        </p>
        <Map />
      </Container>
    </>
  );
}
