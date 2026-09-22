// Server Component — hanya menampilkan data statis
import styles from "./Features.module.css";

// Data array — praktik React yang baik, tidak menulis HTML berulang
const features = [
  {
    icon: "/Image/shore.png",
    title: "Bahan Lokal",
    desc: "Mengangkat hasil laut lokal sebagai bahan baku produk, mendukung perekonomian masyarakat pesisir Lombok.",
  },
  {
    icon: "/Image/mackerel.png",
    title: "Ikan Kembung",
    desc: "Menghadirkan inovasi terasi dengan tambahan ikan kembung, memberikan karakter rasa yang berbeda dari terasi biasa.",
  },
  {
    icon: "/Image/hygiene.png",
    title: "Proses Higienis",
    desc: "Dikembangkan dengan memperhatikan kebersihan proses produksi dan tidak menggunakan bahan pengawet.",
  },
  {
    icon: "/Image/kemasan2.png",
    title: "Kemasan Modern",
    desc: "Dikemas dengan aman menggunakan kemasan komposit yang sesuai dengan kebutuhan konsumen modern.",
  },
];

export default function Features() {
  return (
    <section className={styles.features}>
      {/* Latar belakang gelap */}
      <div className={styles.featuresBg} aria-hidden="true" />

      <div className={`container ${styles.featuresInner}`}>
        <div className={styles.featuresHeader}>
          <span className="section-label" style={{ color: "var(--color-gold-light)" }}>
            Keunggulan
          </span>
          <h2 className={styles.featuresTitle}>Mengapa TEKEMBUNG?</h2>
          <p className={styles.featuresSubtitle}>
            Inovasi yang mengangkat bahan lokal menjadi produk berkualitas.
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {features.map((f, i) => (
            <div key={i} className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <img src={f.icon} alt="" />
              </div>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
