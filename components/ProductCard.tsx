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
    <li className="w-full flex gap-8 mb-20 flex-col sm:flex-row rounded-3xl overflow-hidden bg-gray-50">
      <div
        className="overflow-hidden"
        style={{ minWidth: 400, minHeight: 600, maxWidth: 400, maxHeight: 600 }}
      >
        <Image
          src={`/gamme/${id}.JPG`}
          alt=""
          aria-hidden="true"
          width={400}
          height={600}
          className="hover:scale-105 transition-transform"
        />
      </div>
      <div className="flex-grow pt-4 pr-4 pb-4">
        <div className="text-3xl">{title}</div>
        <div className="flex gap-4 pt-4 pb-4 text-xl text-gray-600">
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
