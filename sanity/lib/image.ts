import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

import { dataset, projectId } from "../env";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

export const urlForImage = (source: Image, width?: number) => {
  const builder = imageBuilder?.image(source).auto("format").fit("max");
  return (width ? builder?.width(width) : builder)?.url();
};
