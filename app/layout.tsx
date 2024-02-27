import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import cx from "@/utils/cx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Distillerie l'Eau Folle",
  description: "Distillerie de Tarentaise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={cx(inter.className, "flex flex-col min-h-screen")}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
