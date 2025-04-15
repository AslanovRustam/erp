import type { FC } from "react";
import styles from "./headerbar.module.css";

interface HeaderbarProps {}

const Headerbar: FC<HeaderbarProps> = () => {
  return (
    <div className={styles.headerBar}>
      <button className={styles.menuButton}>管理作業</button>
      <button className={styles.menuButton}>分裝作業</button>
      <button className={styles.menuButton}>會計總帳</button>
      <button className={styles.menuButton}>報表作業</button>
      <button className={styles.menuButton}>系統設定</button>
      <button className={styles.menuButton}>來電顯示</button>
      <button className={styles.menuButton}>訊息通知</button>
      <button className={styles.menuButton}>使用者</button>
    </div>
  );
};

export default Headerbar;
