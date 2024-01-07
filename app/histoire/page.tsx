import Container from "@/components/Container";
import Heading from "@/components/Heading";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { Pages } from "@/sanity/types";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default async function Histoire() {
  const [content] = await client.fetch<Pages[]>(
    "*[_type == 'pages' && name == 'histoire'] "
  );

  return (
    <Container className="text-lg">
      <Heading>{content.title}</Heading>
      <div className="flex flex-col gap-8">
        <PortableText
          value={content.content!}
          components={{
            list: {
              bullet: ({ children }) => (
                <ul className="list-disc ml-10">{children}</ul>
              ),
            },
            listItem: {
              bullet: ({ children }) => <li>{children}</li>,
            },
            types: {
              image: ({ value }) => (
                <div className="flex justify-center pt-8 pb-8">
                  <Image
                    src={urlForImage(value.asset)}
                    alt={value.alt}
                    width={830}
                    height={300}
                  />
                </div>
              ),
            },
          }}
        />
      </div>
    </Container>
  );
}
