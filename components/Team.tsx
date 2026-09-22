import Image from "next/image";
import styles from "./Team.module.css";

export default function Team() {
  return (
    <section id="team" className={styles.team}>
      <div className="container">
        <div className={styles.teamHeader}>
          <span className="section-label">Tim Kami</span>
          <h2 className="section-title">Di Balik TEKEMBUNG</h2>
          <p className={styles.teamSubtitle}>
            Digerakkan oleh mahasiswa bersemangat dari FATEPA Universitas
            Mataram yang percaya pada potensi hasil laut lokal.
          </p>
        </div>

        <div className={styles.teamContent}>
          {/* Foto tim grup */}
          <div className={styles.teamImageWrap}>
            <Image
              src="/Image/Team.JPG"
              alt="Tim TEKEMBUNG — mahasiswa FATEPA Universitas Mataram"
              width={560}
              height={640}
              className={styles.teamImage}
            />
            <div className={styles.teamImageBadge}>
              <img src="/Image/LogoUnram.png" alt="Universitas Mataram" />
              <div>
                <strong>Universitas Mataram</strong>
                <small>Fakultas Teknologi Pangan dan
                Agroindustri (FATEPA)</small>
              </div>
            </div>
          </div>

          {/* Teks penjelasan */}
          <div className={styles.teamText}>
            <h3 className={styles.teamName}>Tim TEKEMBUNG</h3>
            <p className={styles.teamRole}>
              Universitas Mataram
            </p>
            <p className={styles.teamDesc}>
              TEKEMBUNG dibangun oleh tim mahasiswa yang mengikuti program
              MBKM Kewirausahaan di Fakultas Teknologi Pangan dan
              Agroindustri (FATEPA) Universitas Mataram pada tahun 2024. 
              Sekarang sedang mengikut Program Pembinaan Mahasiswa Wirausaha (P2MW) 
              yang dilaksanakan oleh Kemdiktisaintek Republik Indonesia.
            </p>
            <p className={styles.teamDesc}>
              Dengan semangat inovasi, tim ini mengangkat terasi ikan kembung
              sebagai produk yang layak bersaing di pasar modern, sekaligus
              memberdayakan potensi laut lokal Lombok.
            </p>

            <div className={styles.teamStats}>
              <div className={styles.statItem}>
                <span className={styles.statNum}>2024</span>
                <span className={styles.statLabel}>Tahun Berdiri</span>
              </div>
              <div className={styles.statDivider} aria-hidden="true" />
              <div className={styles.statItem}>
                <span className={styles.statNum}>100%</span>
                <span className={styles.statLabel}>Bahan Lokal</span>
              </div>
              <div className={styles.statDivider} aria-hidden="true" />
              <div className={styles.statItem}>
                <span className={styles.statNum}>Halal</span>
                <span className={styles.statLabel}>Bersertifikat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
