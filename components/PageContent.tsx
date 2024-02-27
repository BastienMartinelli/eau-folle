import { urlForImage } from "@/sanity/lib/image";
import { BlockContent } from "@/sanity/types";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const PageContent: React.FC<{ children?: BlockContent }> = ({
  children,
}) => {
  return (
    !!children && (
      <PortableText
        value={children}
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
    )
  );
};
