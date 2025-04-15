import type { FC, ReactNode } from "react";
import styles from "./main.module.css";
import { GiTorch } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { FiSquare } from "react-icons/fi";
import Button from "../Button/Button";

interface MainProps {
  children: ReactNode;
  title?: string;
}

const Main: FC<MainProps> = ({ children, title }) => {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <div className={styles.titleWrapper}>
            <GiTorch className={styles.icon} />
            <p className={styles.title}>
              銷售作業 2025/04/10 PM 06:10 使用者:李中高 Server:
            </p>
          </div>
          <div className={styles.iconWrapper}>
            <FiMinus className={styles.iconAction} />
            <FiSquare className={styles.iconAction} />
            <IoMdClose className={styles.iconAction} />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.contentTitle}>
            <Button
              icon="salesMasterFile"
              text={title ? title : "銷售主檔"}
              tooltip
            />
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Main;
