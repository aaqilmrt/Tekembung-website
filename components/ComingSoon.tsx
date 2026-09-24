import Image from "next/image";
import styles from "./ComingSoon.module.css";

export default function ComingSoon() {
  return (
    <section className={styles.cs}>
      <div className={styles.csBg} aria-hidden="true" />

      <div className={styles.csInner}>
        {/* Label nama produk */}
        <div className={styles.csTag}>
            Terasi <span style={{ color: "var(--color-brown)" }}>Sangrai</span> Tekembung
        </div>

        {/* Teks COMING + gambar + SOON */}
        <div className={styles.csRow}>
          <span className={styles.csText}>COMING</span>

          <div className={styles.csImageWrap}>
            <Image
              src="/Image/sangrai.png"
              alt="Terasi Sangrai TEKEMBUNG — Segera Hadir"
              width={280}
              height={340}
              className={styles.csImage}
            />
          </div>

          <span className={styles.csText}>SOON</span>
        </div>
      </div>
    </section>
  );
}