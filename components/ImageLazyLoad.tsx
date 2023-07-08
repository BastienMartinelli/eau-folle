import { useEffect, useState } from "react";

type ImageLazyLoadProps = {
  src: string;
  lowRezSrc: string;
  class?: string;
  children?: React.ReactNode;
} & React.ComponentProps<"div">;

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
  style,
  lowRezSrc,
  children,
  ...props
}: ImageLazyLoadProps) => {
  const [srcToUse, blur] = useProgressiveImg(lowRezSrc, src);

  return (
    <div
      {...props}
      style={{
        ...style,
        filter: blur ? "blur(8px)" : "none",
        transition: blur ? "none" : "filter 0.2s ease-out",
        backgroundImage: `url(${srcToUse})`,
        clipPath: "rect(0)",
      }}
    />
  );
};

export default ImageLazyLoad;
