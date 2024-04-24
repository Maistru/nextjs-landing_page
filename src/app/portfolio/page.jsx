import styles from "./page.module.css";
import Link from "next/link";
const Portfolio = () => {
  return (
    <>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center ">
        <Link href={"/portfolio/illustration"} className={styles.item}>
          <span className={styles.title}>Illustration</span>
        </Link>

        <Link href={"/portfolio/websites"} className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>

        <Link href={"/portfolio/application"} className={styles.item}>
          <span className={styles.title}>Application</span>
        </Link>
      </div>
    </>
  );
};

export default Portfolio;
