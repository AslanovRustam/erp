import type { FC } from "react";
import styles from "./salesDetailsTable.module.css";

interface SalesDetailsTableProps {}

const SalesDetailsTable: FC<SalesDetailsTableProps> = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>銷售明細</div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>項次</th>
            <th>產品編號</th>
            <th>單價</th>
            <th>數量</th>
            <th>小計</th>
            <th>倉庫</th>
            <th>品名規格</th>
            <th>單位</th>
            <th>附</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={9} className={styles.placeholder}>
              （尚無資料）
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SalesDetailsTable;
