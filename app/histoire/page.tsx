import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Image from "next/image";

export default function Histoire() {
  return (
    <Container className="text-lg">
      <Heading>Notre histoire</Heading>
      <div className="flex flex-col gap-8">
        <p>
          {`L'Eau Folle est notre distillerie, à nous Rudy et Lucas, deux jeunes de la
      vallée. Le projet a commencé à germer dans notre esprit en 2019 alors que
      nous distillions des fruits avec des anciens du coin : pourquoi ne pas
      faire nous-même, professionnellement, des eaux-de-vie de la meilleure
      qualité possible ?`}
        </p>
        <div className="flex justify-center pt-8 pb-8">
          <Image
            src="/group.webp"
            alt="Rudy et Lucas"
            width={830}
            height={300}
          />
        </div>
        <p>
          {` Le temps pour nous d'entreprendre les démarches administratives, de
        perfectionner notre savoir-faire en nous formant à Cognac, de rassembler
        tous les éléments nécessaires à la construction du projet puis de
        réaliser les travaux d'installation de la distillerie (ainsi que de la
        boutique) et nous étions lancés en juillet de cette année 2022. Cette
        version de l'histoire est bien évidemment simplifiée, elle est en
        réalité bien plus riche et complexe.`}
        </p>
        <p>
          {`L'Eau Folle est une distillerie artisanale, qui utilise du matériel
        traditionnel. Tous nos alambics sont à repasse, c'est à dire que les
        matières premières (moûts, macérats et distillats) doivent être
        distillés au moins deux fois (parfois plus) avant de révéler leurs
        vraies saveurs et d'être mises en bouteilles.`}
        </p>
        <div className="flex justify-center pt-8 pb-8">
          <Image
            src="/local.webp"
            alt="la boutique l'Eau folle"
            width={830}
            height={300}
          />
        </div>
        <p>
          {`La distillerie n'emploie que deux personnes : Rudy et Lucas, pour
        réaliser toutes les tâches:`}
        </p>
        <ul className="list-disc ml-10">
          <li>Le ramassage des fruits</li>
          <li>La cueillette des plantes</li>
          <li>
            {`La préparation des matières premières: le nettoyage et le broyage des
          gentianes, l'égrainage des baies de sureau, le dénoyautage des prunes,
          des cerises ou des pêches, l'émondage de l'absinthe, le pressage des
          pommes et des poires`}
          </li>
          <li>La mise en fermentation des moûts</li>
          <li>La distillation et les repasses</li>
          <li>{`La mise en bouteille et l'étiquetage`}</li>
          <li>Le référencement auprès des douanes</li>
          <li>La vente et la livraison</li>
        </ul>
        <p>
          {`La démarche de la distillerie se veut le plus local possible. Nous
        travaillons avec des matières premières disponibles dans nos vallées
        et/ou nous travaillons avec des acteurs locaux. Nous n'utilisons que des
        ingrédients issus de l'agriculture biologique, nous faisons certifier
        nos zones de ramassage et de cueillette et nous faisons certifier nos
        alcools une fois transformés. Cela nous permet de produire des alcools
        de la meilleure qualité possible.`}
        </p>
        <p>
          {`Nous souhaitons valoriser à la fois le terroir et le patrimoine de nos
        vallées. La distillation était une pratique commune dans nos villages
        autrefois, les anciens ramassaient les fruits et les mettaient en
        tonneaux à la belle saison pour les distiller à l'automne. Toutefois,
        avec le durcissement de la réglementation et l'abandon progressif des
        habitudes pastorales, l'art de distillation s'est peu à peu perdu:
        posséder un alambic et distiller pour soi est devenu interdit.`}
        </p>
      </div>
    </Container>
  );
}
