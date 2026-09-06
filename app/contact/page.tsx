import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import { withMaintenance } from "@/components/Maintainance";
import { Map } from "@/components/Map";
import { client } from "@/sanity/lib/client";
import { Contact } from "@/sanity/types";

async function ContactPage() {
  const [contact]: Contact[] = await client.fetch("*[_type == 'contact']");

  const title = "Nous contacter";

  return (
    <Container>
      <Breadcrumb items={[{ label: title }]} />
      <Heading>{title}</Heading>
      <ul className="text-xl flex flex-col gap-4 text-gray-700">
        <li>
          <a href="mailto:">Email: {contact?.email}</a>
        </li>
        <li>
          <a href="tel:+33 7 48 11 29 37">Téléphone: {contact?.phone}</a>
        </li>
      </ul>
      <div className="mt-14 mb-12">
        <Map address={contact?.address} />
      </div>
    </Container>
  );
}

export default withMaintenance(ContactPage, "contact");
