import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Map from "@/components/Map";

export default function Contact() {
  return (
    <Container>
      <Heading>Nous contacter</Heading>
      <ul className="text-xl flex flex-col gap-4 text-gray-700">
        <li>
          <a href="mailto:">Email: distillerieleaufolle@gmail.com</a>
        </li>
        <li>
          <a href="tel:+33 7 48 11 29 37">Téléphone: +33 7 48 11 29 37</a>
        </li>
      </ul>
      <div className="mt-14 mb-12">
        <Map />
      </div>
    </Container>
  );
}
