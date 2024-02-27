import { urlForImage } from "@/sanity/lib/image";
import { BlockContent } from "@/sanity/types";
import { PortableText, PortableTextProps } from "@portabletext/react";
import Image from "next/image";

export const PageContent: React.FC<
  { children?: BlockContent } & Omit<PortableTextProps, "value">
> = ({ children, components = {} }) => {
  return (
    !!children && (
      <PortableText
        value={children}
        components={{
          ...components,
          list: {
            ...components?.list,
            bullet: ({ children }) => (
              <ul className="list-disc ml-10">{children}</ul>
            ),
          },
          listItem: {
            ...components?.listItem,
            bullet: ({ children }) => <li>{children}</li>,
          },
          types: {
            ...components?.types,
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
    )
  );
};
