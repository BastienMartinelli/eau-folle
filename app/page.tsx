import Hero from "@/components/Hero";
import { Map } from "@/components/Map";
import Container from "@/components/Container";
import Image from "next/image";
import Heading from "@/components/Heading";
import { Contact } from "@/sanity/types";
import { client } from "@/sanity/lib/client";

export default async function Home() {
  const [contact] = await client.fetch<Contact[]>(`*[_type == 'contact']`);

  return (
    <>
      <Hero>
        <div className="max-w-screen-xl mx-auto p-4 flex justify-center w-full">
          <Image
            src="/logo.svg"
            alt="L'eau folle logo"
            width={700}
            height={700}
            className=" md:h-screen m-auto drop-shadow-xl"
          />
        </div>
      </Hero>
      <Container className="pb-24">
        <Heading>Distillerie de Tarentaise</Heading>
        <p className="mb-6 text-lg">
          {`La Distillerie l'Eau Folle est une jeune distillerie installée dans le
          centre de Moutiers.`}
        </p>
        <p className="mb-6 text-lg">
          {`Nous avons pris la décision de travailler avec des produits locaux,
          que nous ramassons, pour la plupart, par nos soins.`}
        </p>
        <p className="mb-6 text-lg">
          {`Notre gamme est ainsi évolutive mais conserve néanmoins un éventail de
          produits disponibles tout au long de l'année.`}
        </p>
        <p className="mb-6 text-lg">
          {`Nous travaillons dans nos locaux avec des méthodes de fabrication
          traditionnelles et sur des alambics à repasse en cuivre.`}
        </p>
        <p className="mb-6 text-lg">
          {`Les produits que nous proposons sont élaborées à partir de recettes
          que nous avons mises au point et peaufinées.`}
        </p>
        <p className="mb-20 mt-16 text-lg text-center text-gray-500 italic">
          {`Nous sommes disponibles, à l'écoute et joignables pour répondre à
          toutes vos demandes concernant nos produits, leur tarification, leur
          commande et leur livraison ou expédition.`}
        </p>
        <Map address={contact?.address} />
      </Container>
    </>
  );
}
