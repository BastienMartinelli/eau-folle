import Image from "next/image";

const imgs = Array(5)
  .fill(0)
  .map((_, i) => i);

export default function Hero() {
  return (
    <section className="flex relative m-auto h-screen max-h-full w-screen max-w-full overflow-hidden">
      <style>
        {`
          .hero-overlay {
            background: linear-gradient(
              rgba(255, 255, 255, 0.2),
              rgba(255, 255, 255, 1) 95%
            );
            transform: scaleY(1.1);
          }

          .img-container {
            height: 700px;
            width: 700px;
            max-width: 100%;
            max-height: 100%;
          }

          .clouds {
            width: 5000px;
            height: 100%;
          }

          .cloud {
            animation: cloudAnimation calc(30s + calc(var(--i) * 10s)) linear infinite;
          }

          @keyframes cloudAnimation {
            0% {
              transform: translate(-100%);
            }
            100% {
              transform: translate(100%);
            }
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
      <div className="absolute left-0 top-0 m-auto w-full z-10">
        <div className="img-container m-auto">
          <Image
            src="/logo.svg"
            alt="L'eau folle logo"
            className="drop-shadow-xl md:mt-24"
            layout="fill"
          />
        </div>
      </div>
      <div className="clouds absolute bottom-0 left-0 overflow-hidden w-full max-h-full">
        {imgs.map((i) => (
          <Image
            key={i}
            src="/clouds/cloud1.png"
            alt="L'eau folle logo"
            layout="fill"
            className="cloud"
            style={
              { "--i": i, zIndex: i % 2 === 0 ? 5 : 15 } as React.CSSProperties
            }
          />
        ))}
      </div>
    </section>
  );
}
