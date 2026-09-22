import type { Metadata } from "next";
import "./globals.css";

// Metadata untuk SEO — Next.js akan menyisipkan ini ke <head>
export const metadata: Metadata = {
  title: "TEKEMBUNG | Terasi dengan Ikan Kembung",
  description:
    "TEKEMBUNG menghadirkan inovasi terasi dengan ikan kembung berbahan hasil laut lokal dengan cita rasa autentik dan kemasan modern.",
  keywords: [
    "tekembung",
    "terasi ikan kembung",
    "terasi lombok",
    "terasi halal",
    "oleh-oleh lombok",
    "produk UMKM NTB",
  ],
  authors: [{ name: "TEKEMBUNG" }],
  openGraph: {
    title: "TEKEMBUNG | Terasi dengan Ikan Kembung",
    description:
      "Inovasi terasi berbahan hasil laut lokal dengan cita rasa autentik dan kemasan modern dari Pulau Lombok.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
