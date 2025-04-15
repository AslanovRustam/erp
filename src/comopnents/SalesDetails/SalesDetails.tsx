import type { FC } from "react";
import styles from "./salesdetails.module.css";
import Button from "../Button/Button";
import Table from "../Table/Table";

interface SalesDetailsProps {}

const SalesDetails: FC<SalesDetailsProps> = () => {
  return (
    <div>
      <div className={styles.contentTitle}>
        <Button text="銷售詳情" icon="salesDetails" tooltip />
      </div>
      <Table />
    </div>
  );
};

export default SalesDetails;
