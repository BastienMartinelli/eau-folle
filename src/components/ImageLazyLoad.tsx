import { ComponentChildren } from "preact";
import { useState, useEffect } from "preact/hooks";

type ImageLazyLoadProps = {
  src: string;
  lowRezSrc: string;
  class?: string;
  children: ComponentChildren;
};

const useProgressiveImg = (
  lowQualitySrc: string,
  highQualitySrc: string
): [string, boolean] => {
  const [src, setSrc] = useState(lowQualitySrc);

  useEffect(() => {
    setSrc(lowQualitySrc);
    const img = new Image();
    img.src = highQualitySrc;
    img.onload = () => {
      setSrc(highQualitySrc);
    };
  }, [lowQualitySrc, highQualitySrc]);

  return [src, src === lowQualitySrc];
};

const ImageLazyLoad = ({
  src,
  lowRezSrc,
  children,
  ...props
}: ImageLazyLoadProps) => {
  const [srcToUse, blur] = useProgressiveImg(lowRezSrc, src);

  return (
    <img
      class={props.class}
      style={{
        filter: blur ? "blur(8px)" : "none",
        transition: blur ? "none" : "filter 0.2s ease-out",
        backgroundImage: `url(${srcToUse})`,
        clipPath: "rect(0)",
      }}
    >
      {children}
    </img>
  );
};

export default ImageLazyLoad;
