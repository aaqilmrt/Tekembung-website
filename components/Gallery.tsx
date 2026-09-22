"use client";
// "use client" diperlukan karena:
// - useState untuk melacak gambar yang diklik (lightbox)
// - event handler onClick untuk membuka/menutup lightbox
// - keyboard event (Escape key) untuk menutup lightbox

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Gallery.module.css";

// Data galeri — mudah ditambah tanpa mengubah JSX
const galleryItems = [
  {
    src: "/Image/galeri1.jpg",
    alt: "Pembeli 1",
    caption: "Pembeli-Ibu Marni",
  },
  {
    src: "/Image/galeri2.jpg",
    alt: "Pembeli 2",
    caption: "Pembeli-Ibu Soto",
  },
  {
    src: "/Image/galeri3.jpg",
    alt: "Pembeli 3",
    caption: "Pembeli-Ibu Siti",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  // Tutup lightbox saat Escape ditekan
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    if (selected !== null) {
      document.addEventListener("keydown", handleKey);
      // Cegah scroll saat lightbox terbuka
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section id="galeri" className={styles.gallery}>
      <div className="container">
        <div className={styles.galleryHeader}>
          <span className="section-label">Galeri</span>
          <h2 className="section-title">Yuk Ikut Mencoba!</h2>
        </div>

        {/* Grid galeri */}
        <div className={styles.galleryGrid}>
          {galleryItems.map((item, i) => (
            <button
              key={i}
              className={styles.galleryItem}
              onClick={() => setSelected(i)}
              aria-label={`Perbesar: ${item.caption}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={600}
                height={500}
                className={styles.galleryImg}
                // Lazy load untuk gambar yang jauh dari viewport
                loading={i === 0 ? "eager" : "lazy"}
              />
              <div className={styles.galleryOverlay}>
                <span className={styles.galleryCaption}>{item.caption}</span>
                <span className={styles.galleryZoom} aria-hidden="true">
                  🔍
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className={styles.lightbox}
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Tampilan besar gambar"
        >
          <button
            className={styles.lightboxClose}
            onClick={() => setSelected(null)}
            aria-label="Tutup lightbox"
          >
            ×
          </button>
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryItems[selected].src}
              alt={galleryItems[selected].alt}
              width={900}
              height={700}
              className={styles.lightboxImg}
            />
            <p className={styles.lightboxCaption}>
              {galleryItems[selected].caption}
            </p>
          </div>
          {/* Navigasi prev/next */}
          <button
            className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
            onClick={(e) => {
              e.stopPropagation();
              setSelected((selected - 1 + galleryItems.length) % galleryItems.length);
            }}
            aria-label="Gambar sebelumnya"
          >
            ‹
          </button>
          <button
            className={`${styles.lightboxNav} ${styles.lightboxNext}`}
            onClick={(e) => {
              e.stopPropagation();
              setSelected((selected + 1) % galleryItems.length);
            }}
            aria-label="Gambar berikutnya"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
