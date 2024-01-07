import Image from "next/image";

type ProductCardProps = {
  id: string;
  titre: string;
  title: string;
  volume: string;
  children: React.ReactNode;
};

export default function ProductCard({
  id,
  titre,
  title,
  volume,
  children,
}: ProductCardProps) {
  return (
    <li className="w-full flex gap-8 mb-20 flex-col p-3 md:flex-row rounded-3xl overflow-hidden bg-gray-50 border-2 border-gray-100">
      <div
        className="overflow-hidden relative m-auto rounded-2xl shadow-xl"
        style={{ minWidth: 400, minHeight: 600, maxWidth: 400, maxHeight: 600 }}
      >
        <Image
          src={`/gamme/${id}.JPG`}
          alt=""
          aria-hidden="true"
          fill
          className="hover:scale-105 transition-transform"
        />
      </div>
      <div className="flex-grow flex flex-col gap-8 md:pl-0 p-5">
        <div className="text-3xl">{title}</div>
        <div className="flex gap-4 text-xl text-gray-600">
          <span>
            Titrage volumique: <strong>{titre}</strong>
          </span>
          <span>
            Volume: <strong>{volume}</strong>
          </span>
        </div>
        <p className="text-lg text-gray-600">{children}</p>
      </div>
    </li>
  );
}
