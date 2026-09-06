import { Product } from "@/sanity/types";

/**
 * GROQ projection that adds the Sanity-generated LQIP (base64 blurred
 * placeholder) of `mainImage` as a top-level `blurDataURL` field.
 */
export const productProjection = `{
  ...,
  "blurDataURL": mainImage.asset->metadata.lqip
}`;

export type ProductWithBlur = Product & { blurDataURL?: string };
