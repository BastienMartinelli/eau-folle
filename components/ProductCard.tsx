import { urlForImage } from "@/sanity/lib/image";
import { Product } from "@/sanity/types";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type ProductCardProps = Pick<
  Product,
  "mainImage" | "strength" | "name" | "volume" | "link"
> & {
  children: Product["description"];
};

export default function ProductCard({
  name,
  volume,
  strength,
  children,
  mainImage,
  link,
}: ProductCardProps) {
  const imageUrl = mainImage ? urlForImage(mainImage) : undefined;

  return (
    <li className="group relative rounded-3xl shadow-2xl flex flex-col focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
      <div
        style={{ width: "100%", aspectRatio: "9/15" }}
        className="relative w-full flex flex-col md:flex-row rounded-3xl overflow-hidden border-1 shadow-2xl transition-transform group-hover:scale-105"
      >
        {imageUrl && (
          <Image src={imageUrl} alt="" aria-hidden="true" fill />
        )}
      </div>
      <div className="mt-2 gap-6 px-6 py-7 flex flex-col flex-grow">
        <div className="text-2xl relative flex gap-2">
          <div className="w-1 h-full bg-secondary-700 rounded-full" />
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name ?? "Ce produit"} — voir dans la boutique en ligne`}
              className="after:absolute after:inset-0 after:rounded-3xl hover:text-primary transition-colors focus:outline-none"
            >
              {name}
            </a>
          ) : (
            name
          )}
        </div>
        {children && (
          <div className="relative z-10">
            <PortableText value={children} />
          </div>
        )}
        <div className="flex-grow" />
        <div className="flex flex-wrap gap-2 text-xl text-gray-600">
          <span>
            Titrage volumique: <strong>{strength}°</strong>
          </span>
          <span>
            Volume: <strong>{volume?.map((v) => `${v}L`)?.join(", ")}</strong>
          </span>
        </div>
      </div>
    </li>
  );
}
