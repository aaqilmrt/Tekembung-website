import styles from "./VisionMission.module.css";

const missions = [
  {
    number: "01",
    text: "Menghasilkan terasi dengan Ikan Kembung yang autentik dan bermutu melalui proses produksi yang higienis dan ramah lingkungan.",
  },
  {
    number: "02",
    text: "Mengoptimalkan pemanfaatan sumber daya laut lokal secara berkelanjutan untuk mendukung perekonomian masyarakat pesisir.",
  },
  {
    number: "03",
    text: "Menerapkan inovasi dalam pengemasan dan pemasaran agar produk terasi diterima dengan baik oleh konsumen modern.",
  },
];

export default function VisionMission() {
  return (
    <section className={styles.vm}>
      <div className={styles.vmBg} aria-hidden="true" />
      <div className={`container ${styles.vmInner}`}>
        {/* Visi */}
        <div className={styles.visionBlock}>
          <h2 className="section-title" style={{ color: "var(--color-gold-pale)", textAlign: "center" }}>
            Visi
          </h2>
          <blockquote className={styles.visionStatement}>
            &ldquo;Menjadi Produsen terasi dengan Ikan Kembung berkualitas
            tinggi dan dapat memanfaatkan bahan pangan lokal serta meningkatkan
            nilai jual produk perikanan lokal.&rdquo;
          </blockquote>
        </div>

        {/* Misi */}
        <div className={styles.missionBlock}>
          <h2 className="section-title" style={{ color: "var(--color-gold-pale)", textAlign: "center" }}>
            Misi
          </h2>
          <div className={styles.missionGrid}>
            {missions.map((m) => (
              <div key={m.number} className={styles.missionCard}>
                <span className={styles.missionNum}>{m.number}</span>
                <p className={styles.missionText}>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
