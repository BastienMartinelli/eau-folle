"use client";

export default function Map() {
  const API_KEY = process.env.GOOGLE_API_KEY;

  return (
    <iframe
      className="rounded-xl shadow-lg"
      title="l'eau folle map"
      style={{ width: "100%", height: 400 }}
      src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=10 avenue de la libération 73600 MOUTIERS&zoom=17`}
      allowFullScreen
    />
  );
}
