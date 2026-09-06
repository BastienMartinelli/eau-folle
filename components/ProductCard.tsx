import { urlForImage } from "@/sanity/lib/image";
import { Product } from "@/sanity/types";
import Image from "next/image";

type ProductCardProps = Pick<
  Product,
  "mainImage" | "strength" | "name" | "volume" | "link" | "slug"
> & {
  children: Product["description"];
  blurDataURL?: string;
};

export default function ProductCard({
  name,
  volume,
  strength,
  mainImage,
  blurDataURL,
  link,
  slug,
}: ProductCardProps) {
  const imageUrl = mainImage ? urlForImage(mainImage, 1000) : undefined;
  const href = slug?.current ? `/gamme/${slug.current}` : undefined;

  return (
    <li className="group relative flex flex-col overflow-hidden rounded-3xl border-1 shadow-2xl focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
      {href && (
        <a
          href={href}
          aria-label={`Voir le détail de ${name ?? "ce produit"}`}
          className="absolute inset-0 z-10"
        />
      )}
      <div
        style={{ width: "100%", aspectRatio: "9/15" }}
        className="relative w-full shrink-0 overflow-hidden"
      >
        {imageUrl && (
          <Image
            src={imageUrl}
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 460px"
            quality={70}
            placeholder={blurDataURL ? "blur" : "empty"}
            blurDataURL={blurDataURL}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Commander ${
              name ?? "ce produit"
            } dans la boutique en ligne`}
            className="absolute right-4 top-4 z-20 inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1.5 text-base font-medium text-primary backdrop-blur-md transition-colors hover:bg-white hover:text-primary-700"
          >
            <span>Commander</span>
            <span aria-hidden="true">→</span>
          </a>
        )}
      </div>

      <div className="flex flex-grow flex-col p-6">
        <h3 className="flex gap-2 text-lg text-primary">
          <span className="w-1 shrink-0 rounded-full bg-secondary-700" />
          {name}
        </h3>
        <div className="mt-auto flex gap-6 pt-6 text-gray-700">
          <div>
            <div className="text-xs uppercase tracking-wide text-gray-500">
              Titrage
            </div>
            <div className="text-lg">
              <strong>{strength}°</strong>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wide text-gray-500">
              Volume
            </div>
            <div className="text-lg">
              <strong>{volume?.map((v) => `${v} L`)?.join(", ")}</strong>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
