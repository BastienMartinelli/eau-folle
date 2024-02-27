import Hero from "@/components/Hero";
import { Map } from "@/components/Map";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import { Contact, Pages } from "@/sanity/types";
import { client } from "@/sanity/lib/client";
import { PageContent } from "@/components/PageContent";

export default async function Home() {
  const [contact] = await client.fetch<Contact[]>(`*[_type == 'contact']`);
  const [page] = await client.fetch<Pages[]>(
    "*[_type == 'pages' && name == 'home'] "
  );

  return (
    <>
      <Hero />
      <Container className="pb-24">
        <Heading>{page.title}</Heading>
        <div className="text-lg home-content flex flex-col gap-3">
          <PageContent>{page.content}</PageContent>
        </div>
        <div className="flex justify-center mb-20">
          <a
            href="/gamme"
            className="py-4 px-7 my-20 m-auto bg-primary-700 hover:bg-primary-600 rounded-xl text-white"
          >
            Découvrir notre gamme
          </a>
        </div>
        <Map address={contact?.address} />
      </Container>
    </>
  );
}
