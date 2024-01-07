import { FC } from "react";

type MapProps = { address?: string | string[] };

export const Map: FC<MapProps> = ({ address }) => {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

  if (!address) return null;

  return (
    <iframe
      className="rounded-xl shadow-lg"
      title="l'eau folle map"
      style={{ width: "100%", height: 400 }}
      src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${address}&zoom=17`}
      allowFullScreen
    />
  );
};
