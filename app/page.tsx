// page.tsx adalah entry point halaman utama
// Ini adalah Server Component (tidak ada "use client")
// Hanya menyusun (compose) komponen-komponen yang sudah dibuat

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Product from "@/components/Product";
import Philosophy from "@/components/Philosophy";
import VisionMission from "@/components/VisionMission";
import Legality from "@/components/Legality";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      {/* Navigasi — sticky di atas */}
      <Navbar />

      {/* Konten utama halaman */}
      <main>
        <Hero />
        <About />
        <Features />
        <Product />
        <Philosophy />
        <VisionMission />
        <Legality />
        <Team />
        <Gallery />
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
