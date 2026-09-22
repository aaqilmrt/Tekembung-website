import styles from "./Legality.module.css";

// Data legalitas — menggunakan data nyata dari dokumen
const legalDocs = [
  {
    icon: "/Image/NIB.png",
    title: "Nomor Induk Berusaha (NIB)",
    number: "0708260003047",
    detail: "Pelaku Usaha: Laela Ardo · Usaha Mikro",
    kbli: "KBLI 10295 — Pengolahan dan Pengawetan Biota Air Lainnya dengan Fermentasi",
    file: "/legal/NIB_TEKEMBUNG.pdf",
    btnLabel: "Lihat NIB",
  },
  {
    icon: "/Image/Halal.png",
    title: "Sertifikat Halal",
    number: "ID52110080430880926",
    detail: "TEKEMBUNG Terasi Udang Rebon dengan tambahan ikan",
    kbli: "Diterbitkan oleh BPJPH — 06 September 2026",
    file: "/legal/SH_TEKEMBUNG.pdf",
    btnLabel: "Lihat Sertifikat Halal",
  },
  {
    icon: "/Image/SPP-IRT.png",
    title: "SPP-IRT",
    number: "P-IRT 7025271010652-31",
    detail: "Sertifikasi Pemenuhan Komitmen Produksi Pangan Olahan IRT",
    kbli: "Berlaku hingga: 19 Agustus 2031",
    file: "/legal/SP-PIRT_TEKEMBUNG.pdf",
    btnLabel: "Lihat SPP-IRT",
  },
];

export default function Legality() {
  return (
    <section id="legalitas" className={styles.legality}>
      <div className="container">
        <div className={styles.legalityHeader}>
          <span className="section-label">Legalitas</span>
          <h2 className="section-title">Terdaftar dan Terjamin</h2>
          <p className={styles.legalitySubtitle}>
            TEKEMBUNG beroperasi dengan izin resmi dan bersertifikat halal dari
            pemerintah Republik Indonesia.
          </p>
        </div>

        <div className={styles.legalityGrid}>
          {legalDocs.map((doc, i) => (
            <div key={i} className={styles.legalCard}>
              <div className={styles.legalIcon}>
                <img src={doc.icon} alt="" />
              </div>
              <h3 className={styles.legalTitle}>{doc.title}</h3>
              <p className={styles.legalNumber}>{doc.number}</p>
              <p className={styles.legalDetail}>{doc.detail}</p>
              <p className={styles.legalKbli}>{doc.kbli}</p>
              <a
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-outline ${styles.legalBtn}`}
              >
                {doc.btnLabel} ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
