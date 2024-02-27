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
    <li className="rounded-3xl shadow-2xl flex flex-col">
      <div
        style={{ width: "100%", aspectRatio: "9/15" }}
        className="relative w-full flex flex-col md:flex-row rounded-3xl overflow-hidden border-1 shadow-2xl hover:scale-105 transition-transform"
      >
        {mainImage && (
          <Image src={urlForImage(mainImage)} alt="" aria-hidden="true" fill />
        )}
      </div>
      <div className="mt-2 gap-6 px-6 py-7 flex flex-col flex-grow">
        <div className="text-2xl relative flex gap-2">
          <div className="w-1 h-full bg-secondary-700 rounded-full" />
          {name}
        </div>
        {children && <PortableText value={children} />}
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
