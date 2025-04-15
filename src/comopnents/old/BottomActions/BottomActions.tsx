import type { FC } from "react";
import styles from "./bottomActions.module.css";

interface BottomActionsProps {}

const BottomActions: FC<BottomActionsProps> = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.toolbar}>
        <button title="新增">
          <img src="/icons/add.png" alt="新增" />
        </button>
        <button title="刪除">
          <img src="/icons/delete.png" alt="刪除" />
        </button>
        <button title="明細瀏覽">
          <img src="/icons/details.png" alt="明細瀏覽" />
        </button>
        <button title="銷貨單">
          <img src="/icons/sale.png" alt="銷貨單" />
        </button>
        <button title="過濾">
          <img src="/icons/filter.png" alt="過濾" />
        </button>
      </div>
      <div className={styles.info}>
        <label>
          說明:
          <input type="text" />
        </label>
        <div className={styles.status}>狀態:</div>
      </div>
    </div>
  );
};

export default BottomActions;
