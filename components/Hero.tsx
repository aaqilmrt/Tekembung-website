// Hero adalah Server Component — tidak butuh interaksi
// Next.js Image digunakan untuk optimasi gambar otomatis
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  const waLink =
    "https://wa.me/6285966249510?text=Halo%20TEKEMBUNG%2C%20saya%20ingin%20memesan%20produk%20Terasi%20Ikan%20Kembung.";

  return (
    <section className={styles.hero} aria-label="Hero TEKEMBUNG">
      {/* Latar belakang dengan gradien */}
      <div className={styles.heroBg} aria-hidden="true" />

      <div className={`container ${styles.heroInner}`}>
        {/* Kolom kiri — teks */}
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>Produk Lokal Lombok</span>
          <h1 className={styles.heroHeadline}>
            Temukan Cita Rasa<br />
            <em>Masakanmu!</em>
          </h1>
          <p className={styles.heroSub}>
            TEKEMBUNG — Terasi dengan Ikan Kembung
          </p>
          <p className={styles.heroDesc}>
            Inovasi terasi berbahan hasil laut lokal dengan cita rasa autentik
            dan kemasan modern dari Pulau Lombok.
          </p>
          <div className={styles.heroCtas}>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              Pesan Sekarang
            </a>
            <a href="#about" className="btn btn-outline-cream">
              Kenali TEKEMBUNG
            </a>
          </div>
        </div>

        {/* Kolom kanan — foto produk */}
        <div className={styles.heroImageWrap}>
          <div className={styles.heroImageRing} aria-hidden="true" />
          <Image
            src="/Image/kemasan2.png"
            alt="Produk TEKEMBUNG Terasi dengan Ikan Kembung kemasan merah"
            width={420}
            height={500}
            priority
            className={styles.heroImage}
          />
          {/* Badge mengambang */}
          <div className={styles.heroBadge}>
            <img
              src="/Image/Halal_Indonesia.svg.webp"
              alt="IconHalal"
              width={32}
              height={32}
            />
            <div>
              <strong>Bersertifikat Halal</strong>
              <small>BPJPH Indonesia</small>
            </div>
          </div>
        </div>
      </div>

      {/* Gelombang dekoratif bawah */}
      <div className={styles.heroWave} aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="var(--color-cream)"
          />
        </svg>
      </div>
    </section>
  );
}
