import Container from "@/components/Container";
import Map from "@/components/Map";

export default function Contact() {
  return (
    <Container>
      <h1 className="text-4xl mb-12">Nous contacter</h1>
      <ul>
        <li>
          <a href="mailto:">Email: distillerieleaufolle@gmail.com</a>
        </li>
        <li>
          <a href="tel:+33 7 48 11 29 37">Téléphone: +33 7 48 11 29 37</a>
        </li>
      </ul>
      <div className="mt-12 mb-12">
        <Map />
      </div>
    </Container>
  );
}
