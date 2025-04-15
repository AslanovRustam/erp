import { MdCreateNewFolder } from "react-icons/md";
import { FaFolderOpen } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdColorize } from "react-icons/md";
import { MdEditNote } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import styles from "./styles.module.css";
import {
  HiOutlineClipboardDocumentList,
  HiOutlinePrinter,
} from "react-icons/hi2";
import { TbListDetails } from "react-icons/tb";

export default function EditButtons() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <MdCreateNewFolder className={styles.icon} />
        </li>
        <li className={styles.item}>
          <FaFolderOpen className={styles.icon} />
        </li>
        <li className={styles.item}>
          <FaSave className={styles.icon} />
        </li>
        <li className={styles.item}>
          <FaPrint className={styles.icon} />
        </li>
        <li className={styles.item}>
          <FaEdit className={styles.icon} />
        </li>
        <li className={styles.item}>
          <MdColorize className={styles.icon} />
        </li>
        <li className={styles.item}>
          <MdEditNote className={styles.icon} />
        </li>
        <li className={styles.item}>
          <FaFileAlt className={styles.icon} />
        </li>
        <li className={styles.item}>
          <FaClipboardList className={styles.icon} />
        </li>
        <li className={styles.item}>
          <FaFilter className={styles.icon} />
        </li>
      </ul>
      <ul className={styles.textList}>
        <li className={styles.textButton}>
          <HiOutlineClipboardDocumentList />
          <span>3.明細瀏覽</span>
        </li>
        <li className={styles.textButton}>
          <HiOutlinePrinter /> <span>P.銷貨單</span>
        </li>
        <li className={styles.textButton}>
          <TbListDetails /> <span>E.過濾</span>
        </li>
      </ul>
    </div>
  );
}
