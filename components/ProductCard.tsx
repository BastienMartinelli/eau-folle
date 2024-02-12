import { urlForImage } from "@/sanity/lib/image";
import { Product } from "@/sanity/types";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type ProductCardProps = Pick<
  Product,
  "mainImage" | "strength" | "name" | "volume"
> & {
  children: Product["description"];
};

export default function ProductCard({
  name,
  volume,
  strength,
  children,
  mainImage,
}: ProductCardProps) {
  return (
    <li className="w-full flex gap-8 mb-20 flex-col p-3 md:flex-row rounded-3xl overflow-hidden bg-gray-50 border-2 border-gray-100">
      <div
        className="overflow-hidden relative m-auto rounded-2xl shadow-xl"
        style={{ minWidth: 400, minHeight: 600, maxWidth: 400, maxHeight: 600 }}
      >
        {mainImage && (
          <Image
            src={urlForImage(mainImage)}
            alt=""
            aria-hidden="true"
            fill
            className="hover:scale-105 transition-transform"
          />
        )}
      </div>
      <div className="flex-grow flex flex-col gap-8 md:pl-0 p-5">
        <div className="text-3xl">{name}</div>
        <div className="flex gap-4 text-xl text-gray-600">
          <span>
            Titrage volumique: <strong>{strength}°</strong>
          </span>
          <span>
            Volume: <strong>{volume?.join(", ")}</strong>
          </span>
        </div>
        {children && (
          <p className="text-lg text-gray-600">
            <PortableText value={children} />
          </p>
        )}
      </div>
    </li>
  );
}
