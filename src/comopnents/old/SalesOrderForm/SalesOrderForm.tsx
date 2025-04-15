import type { FC } from "react";
import styles from "./salesOrderForm.module.css";

interface SalesOrderFormProps {}

const SalesOrderForm: FC<SalesOrderFormProps> = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sectionTitle}>銷售主檔</div>
      <div className={styles.grid}>
        <label>
          銷售單號
          <input type="text" />
        </label>
        <label>
          銷售日期
          <input type="text" />
        </label>
        <label>
          客戶編號
          <input type="text" />
        </label>
        <label>
          客戶實號
          <input type="text" />
        </label>
        <label>
          未稅小計
          <input type="text" />
        </label>
        <label>
          折讓金額
          <input type="text" />
        </label>
        <label>
          稅額
          <input type="text" />
        </label>
        <label>
          稅別
          <div className={styles.radioGroup}>
            <label>
              <input type="radio" name="tax" />
              免稅
            </label>
            <label>
              <input type="radio" name="tax" />
              外加
            </label>
            <label>
              <input type="radio" name="tax" />
              內含
            </label>
          </div>
        </label>
        <label>
          帳款日期
          <input type="text" />
        </label>
        <label>
          安裝人員
          <input type="text" />
        </label>
        <label>
          姓名
          <input type="text" />
        </label>
        <label>
          預設倉庫
          <input type="text" />
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" />
          是否借出
        </label>
        <label>
          金額合計
          <input type="text" />
        </label>
        <label>
          已付金額
          <input type="text" />
        </label>
        <label>
          未結金額
          <input type="text" />
        </label>
        <label>
          結清日期
          <input type="text" />
        </label>
        <label className={styles.full}>
          附記事項
          <input type="text" style={{ width: "100%" }} />
        </label>
      </div>
    </div>
  );
};

export default SalesOrderForm;
