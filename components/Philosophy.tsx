import Image from "next/image";
import styles from "./Philosophy.module.css";

const elements = [
  {
    number: "01",
    title: "Ikan Kembung",
    desc: "Bahan baku pilihan yang berkualitas, diambil dari hasil laut lokal Lombok.",
    accent: "var(--color-gold)",
  },
  {
    number: "02",
    title: "Cobek & Terasi",
    desc: "Melambangkan proses tradisional dan cita rasa autentik yang diwariskan secara turun-temurun.",
    accent: "var(--color-maroon-light)",
  },
  {
    number: "03",
    title: "Aroma & Cita Rasa",
    desc: "Uap menggambarkan aroma khas terasi yang kuat dan menggugah selera memasak.",
    accent: "var(--color-orange)",
  },
];

export default function Philosophy() {
  return (
    <section id="filosofi" className={styles.philosophy}>
      <div className="container">
        <div className={styles.philosophyGrid}>
          {/* Kolom kiri — logo besar */}
          <div className={styles.philosophyVisual}>
            <div className={styles.logoRing}>
              <Image
                src="/Image/LogoTekembung.png"
                alt="Logo TEKEMBUNG — ikan kembung dan cobek terasi"
                width={460}
                height={460}
                className={styles.logoImg}
              />
            </div>
            <div className={styles.logoGlow} aria-hidden="true" />
          </div>

          {/* Kolom kanan — teks */}
          <div className={styles.philosophyContent}>
            <span className="section-label">Filosofi Logo</span>
            <h2 className="section-title">
              Makna di Balik<br />
              <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>
                TEKEMBUNG
              </em>
            </h2>
            <p className={styles.philosophyIntro}>
              Setiap elemen dalam logo TEKEMBUNG mengandung makna yang
              merepresentasikan identitas dan nilai brand.
            </p>

            <div className={styles.elementList}>
              {elements.map((el) => (
                <div key={el.number} className={styles.element}>
                  <div
                    className={styles.elementNum}
                    style={{ color: el.accent, borderColor: el.accent }}
                  >
                    {el.number}
                  </div>
                  <div>
                    <h3 className={styles.elementTitle}>{el.title}</h3>
                    <p className={styles.elementDesc}>{el.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
