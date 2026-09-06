"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function PageBackdrop({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // The homepage already has its own <Hero /> backdrop.
  if (pathname === "/") {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      <style>
        {`
          .page-backdrop {
            /* same framing as the homepage hero: a min(900px, 100vh) box
               flush to the top of the viewport, pulled up under the
               navbar spacer (h-24) */
            top: -6rem;
            height: min(900px, 100vh);
          }

          .page-backdrop-overlay {
            background: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.6) 0%,
              rgba(255, 255, 255, 0.55) 15%,
              rgba(255, 255, 255, 0.85) 30%,
              rgba(255, 255, 255, 1) 50%
            );
          }
        `}
      </style>

      <div
        aria-hidden="true"
        className="page-backdrop pointer-events-none absolute left-0 z-0 w-full overflow-hidden"
      >
        <Image
          src="/hero.webp"
          className="absolute top-0 left-0 h-full w-full border-none object-cover"
          alt=""
          aria-hidden="true"
          fill
        />
        <div className="page-backdrop-overlay absolute top-0 left-0 h-full w-full border-none" />
      </div>

      <div className="relative z-10 pt-16 md:pt-28">{children}</div>
    </div>
  );
}
