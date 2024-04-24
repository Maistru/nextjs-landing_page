import styles from "./page.module.css";
const layout = ({ children }) => {
  return (
    <div className={styles.mainTitle}>
      <h1 className="text-center text-6xl font-bold mt-16">Our Works</h1>
      {children}
    </div>
  );
};

export default layout;
