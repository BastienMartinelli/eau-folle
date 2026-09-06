import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import { withMaintenance } from "@/components/Maintainance";
import { PageContent } from "@/components/PageContent";
import { client } from "@/sanity/lib/client";
import { Pages } from "@/sanity/types";

async function Histoire() {
  const [page] = await client.fetch<Pages[]>(
    "*[_type == 'pages' && name == 'histoire'] "
  );

  const title = page?.title ?? "Notre histoire";

  return (
    <Container className="text-lg">
      <Breadcrumb label={title} />
      <Heading>{title}</Heading>
      <div className="flex flex-col gap-8">
        <PageContent>{page?.content}</PageContent>
      </div>
    </Container>
  );
}

export default withMaintenance(Histoire, "histoire");
