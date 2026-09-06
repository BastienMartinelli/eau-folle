import Hero from "@/components/Hero";
import { Map } from "@/components/Map";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import { Contact, Pages } from "@/sanity/types";
import { client } from "@/sanity/lib/client";
import { PageContent } from "@/components/PageContent";
import { withMaintenance } from "@/components/Maintainance";
import Button from "@/components/Button";

async function Home() {
  const [contact] = await client.fetch<Contact[]>(`*[_type == 'contact']`);
  const [page] = await client.fetch<Pages[]>(
    "*[_type == 'pages' && name == 'home'] "
  );

  return (
    <>
      <Hero />
      <Container className="pb-24">
        {page?.title && <Heading>{page.title}</Heading>}
        <div className="text-lg home-content flex flex-col gap-3">
          <PageContent>{page?.content}</PageContent>
        </div>
        <div className="flex justify-center mb-18">
          <Button as="a" href="/gamme" className="my-20">
            Découvrir notre gamme
          </Button>
        </div>
        <Map address={contact?.address} />
      </Container>
    </>
  );
}

export default withMaintenance(Home, "home");
