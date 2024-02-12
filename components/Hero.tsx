import Image from "next/image";
import { PropsWithChildren } from "react";

export default function Hero({ children }: PropsWithChildren) {
  return (
    <section
      className="m-auto md:h-screen relative mb-40"
      style={{ minHeight: "min-contents" }}
    >
      <style>
        {`
          .hero-overlay {
            background: linear-gradient(
              rgba(255, 255, 255, 0.2),
              rgba(255, 255, 255, 1) 95%
            );
            transform: scaleY(1.1);
          }
        `}
      </style>
      <Image
        src="/hero.webp"
        className="absolute top-0 left-0 w-full h-full border-none object-cover"
        alt=""
        aria-hidden="true"
        fill
      />
      <div className="hero-overlay absolute top-0 left-0 w-full h-full border-none" />
      <div className="pt-28">{children}</div>
    </section>
  );
}
