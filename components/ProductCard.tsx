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
    <li className="w-full flex gap-8 mb-20 flex-col md:flex-row rounded-3xl overflow-hidden border-1 border-gray-50 shadow-2xl">
      <div
        className="overflow-hidden relative m-auto shadow-xl"
        style={{ aspectRatio: "9/16", minWidth: 400, maxWidth: 400 }}
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
        <div className="flex flex-wrap gap-4 text-xl text-gray-600">
          <span>
            Titrage volumique: <strong>{strength}°</strong>
          </span>
          <span>
            Volume: <strong>{volume?.map((v) => `${v}L`)?.join(", ")}</strong>
          </span>
        </div>
        {children && <PortableText value={children} />}
      </div>
    </li>
  );
}
