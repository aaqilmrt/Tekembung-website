"use client";
// "use client" diperlukan karena Navbar menggunakan:
// - useState (untuk buka/tutup menu mobile)
// - useEffect (untuk deteksi scroll)
// - event listener (onClick hamburger)

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Tentang", href: "#about" },
  { label: "Produk", href: "#produk" },
  { label: "Filosofi", href: "#filosofi" },
  { label: "Legalitas", href: "#legalitas" },
  { label: "Tim", href: "#team" },
  { label: "Galeri", href: "#galeri" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Deteksi scroll untuk mengubah tampilan navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tutup menu ketika link diklik
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav}>
        <a href="#" className={styles.logo} onClick={handleLinkClick}>
          <Image
            src="/Image/LogoTekembung.png"
            alt="Logo TEKEMBUNG"
            width={50}
            height={50}
            priority
          />
          <span className={styles.logoText}>TEKEMBUNG</span>
        </a>

        {/* Desktop menu */}
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href="https://wa.me/6285966249510?text=Halo%20TEKEMBUNG%2C%20saya%20ingin%20memesan%20produk%20Terasi%20Ikan%20Kembung."
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-primary ${styles.navCta}`}
        >
          Pesan Sekarang
        </a>

        {/* Tombol hamburger untuk mobile */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.mobileLink} onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/6285966249510?text=Halo%20TEKEMBUNG%2C%20saya%20ingin%20memesan%20produk%20Terasi%20Ikan%20Kembung."
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-primary ${styles.mobileCta}`}
              onClick={handleLinkClick}
            >
              Pesan Sekarang
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
