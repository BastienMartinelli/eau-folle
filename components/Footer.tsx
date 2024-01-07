import { client } from "@/sanity/lib/client";
import Container from "./Container";
import { Contact } from "@/sanity/types";

const currentYear = new Date().getFullYear();

export async function Footer() {
  const [contact]: Contact[] = await client.fetch("*[_type == 'contact']");

  return (
    <footer className="bg-gray-100 pt-8 mt-14 grow">
      <Container className="w-full p-4 py-6 lg:py-8">
        <div className="flex justify-center flex-wrap flex-col sm:flex-row gap-12 md:gap-24">
          <div>
            <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase">
              Adresse
            </h2>
            <div className="text-md text-gray-500 font-medium flex flex-col gap-2">
              <div>{"L'eau Folle"}</div>
              {contact?.address?.map((addressPart) => (
                <div key={addressPart}>{addressPart}</div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase">
              Contact
            </h2>
            <div className="text-md text-gray-500 font-medium flex flex-col gap-2">
              <a href="mailto:">Email: {contact?.email}</a>
              <a href="tel:+33 7 48 11 29 37">Tel: {contact?.phone}</a>
            </div>
          </div>
        </div>
        <div className="p-8 text-gray-500 flex justify-center">
          {`@copyright l'eau folle ${currentYear}`}
        </div>
      </Container>
    </footer>
  );
}
