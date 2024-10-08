import styles from "@/styles/page.module.sass";
import CalcTable from "@/components/calcTable";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.calculadora}>
          <div className={styles.calcTitle}>
            <h1 className={styles.title}>Calculadora</h1>
          </div>

          <CalcTable />
        </div>
      </div>
    </div>
  );
}
