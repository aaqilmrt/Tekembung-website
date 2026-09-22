// About adalah Server Component
import styles from "./About.module.css";

const milestones = [
  {
    year: "2024",
    tag: "Awal Mula",
    title: "MBKM Kewirausahaan",
    desc: "TEKEMBUNG lahir dalam program MBKM Kewirausahaan FATEPA Universitas Mataram.",
  },
  {
    year: "—",
    tag: "Berkembang",
    title: "Respons Konsumen",
    desc: "Antusiasme masyarakat terhadap terasi ikan kembung mendorong pengembangan sebagai bisnis berkelanjutan.",
  },
  {
    year: "—",
    tag: "Kini",
    title: "Inovasi Lokal",
    desc: "TEKEMBUNG kini menjadi salah satu produk oleh-oleh unik bagi wisatawan yang berkunjung ke Pulau Lombok.",
  },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.aboutGrid}>
          {/* Kolom teks */}
          <div className={styles.aboutLeft}>
            <span className="section-label">Tentang Kami</span>
            <h2 className="section-title">
              Berawal dari<br />Inovasi Lokal
            </h2>
            <p className={styles.aboutLead}>
              TEKEMBUNG hadir untuk mengangkat nilai terasi yang awalnya 
              sering kali dianggap sebagai sebuah produk yang memiliki citra 
              buruk seperti aroma yang tidak sedap, kotor, jorok dan tentu 
              saja tidak dilirik sebagai komoditas bernilai jual tinggi.
            </p>
            <p className={styles.aboutBody}>
              TEKEMBUNG alias Terasi dengan Ikan Kembung hadir sebagai sebuah 
              solusi di masyarakat dengan udang rebon dan ikan kembung yang 
              bernilai gizi tinggi sebagai bahan baku, proses produksi yang 
              higienis, tidak menggunakan pengawet serta pengemasan yang aman. 
            </p>
          </div>

          {/* Kolom timeline */}
          <div className={styles.aboutRight}>
            <div className={styles.timeline}>
              {milestones.map((m, i) => (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.timelineDot} aria-hidden="true" />
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineMeta}>
                      <span className={styles.timelineYear}>{m.year}</span>
                      <span className={styles.timelineTag}>{m.tag}</span>
                    </div>
                    <h3 className={styles.timelineTitle}>{m.title}</h3>
                    <p className={styles.timelineDesc}>{m.desc}</p>
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
