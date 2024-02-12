import Container from "@/components/Container";
import Heading from "@/components/Heading";
import { PageContent } from "@/components/PageContent";
import { client } from "@/sanity/lib/client";
import { Pages } from "@/sanity/types";

export default async function Histoire() {
  const [page] = await client.fetch<Pages[]>(
    "*[_type == 'pages' && name == 'histoire'] "
  );

  return (
    <Container className="text-lg">
      <Heading>{page.title}</Heading>
      <div className="flex flex-col gap-8">
        <PageContent>{page.content}</PageContent>
      </div>
    </Container>
  );
}
