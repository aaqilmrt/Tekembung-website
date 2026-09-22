import Image from "next/image";
import styles from "./Product.module.css";

// Komposisi produk — ditampilkan secara visual
const ingredients = [
  { name: "Udang Rebon", icon: "🦐" },
  { name: "Ikan Kembung", icon: "🐟" },
  { name: "Air", icon: "💧" },
  { name: "Garam", icon: "🧂" },
  { name: "Pewarna Makanan", icon: "🎨" },
];

const waLink =
  "https://wa.me/6285966249510?text=Halo%20TEKEMBUNG%2C%20saya%20ingin%20memesan%20produk%20Terasi%20Ikan%20Kembung.";
const shopeeLink = "https://id.shp.ee/bTEE5cSa?share_channel_code=1";

export default function Product() {
  return (
    <section id="produk" className={styles.product}>
      <div className="container">
        <div className={styles.productHeader}>
          <span className="section-label">Produk Kami</span>
          <h2 className="section-title">Kenali Produk Kami</h2>
        </div>

        <div className={styles.productGrid}>
          {/* Gambar produk */}
          <div className={styles.productImages}>
            <div className={styles.imgMain}>
              <Image
                src="/Image/kemasan3.png"
                alt="Produk TEKEMBUNG Terasi Ikan Kembung kemasan Baru"
                width={380}
                height={440}
                className={styles.productImg}
              />
            </div>
            <div className={styles.imgSecond}>
              <Image
                src="/Image/kemasan4.jpg"
                alt="Produk TEKEMBUNG Terasi Ikan Kembung kemasan Lama"
                width={260}
                height={300}
                className={styles.productImg}
              />
            </div>
          </div>

          {/* Info produk */}
          <div className={styles.productInfo}>
            <div className={styles.productBadge}>Terasi Inovasi Lokal</div>
            <h3 className={styles.productName}>TEKEMBUNG</h3>
            <p className={styles.productCategory}>
              Terasi dengan Ikan Kembung
            </p>

            <div className={styles.divider} />

            <div className={styles.compositionWrap}>
              <h4 className={styles.compositionTitle}>Komposisi</h4>
              <div className={styles.compositionList}>
                {ingredients.map((item, i) => (
                  <div key={i} className={styles.compositionItem}>
                    <span className={styles.compositionIcon} aria-hidden="true">
                      {item.icon}
                    </span>
                    <span className={styles.compositionName}>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.divider} />

            <div className={styles.productCtas}>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                  <img
                    src="/Image/iconWA.svg"
                    alt=""
                    width="18"
                    height="18"
                  />
                Pesan via WhatsApp
              </a>
              <a
                href={shopeeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                  <img
                    src="/Image/IconShopee.svg"
                    alt=""
                    width="20"
                    height="20"
                  />
                Beli di Shopee
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
