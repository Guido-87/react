import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          src="/logo.png"
          alt="Los Caballeros del Zodíaco logo"
          width={500}
          height={250}
          priority
        />
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            rel="noopener noreferrer"
          >
            Listado
          </a>
          <a
            className={styles.primary}
            rel="noopener noreferrer"
          >
            Ver Detalle
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        © Guido Álvarez - 2024
      </footer>
    </div>
  );
}
