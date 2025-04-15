import { useState, useRef, useLayoutEffect, type FC } from "react";
import Button from "../Button/Button";
import { sidebarItems } from "../../constants/constants";
import styles from "./sidebar.module.css";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  const listRef = useRef<HTMLUListElement>(null);
  const squareRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [lineHeight, setLineHeight] = useState(0);

  const handleListOpen = () => {
    setOpen(!open);
  };

  useLayoutEffect(() => {
    if (open && listRef.current && squareRef.current) {
      const squareRect = squareRef.current.getBoundingClientRect();
      const listRect = listRef.current.getBoundingClientRect();

      const distance = squareRect.height / 2 + listRect.height;

      setLineHeight(distance);
    }
  }, [open]);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.container}>
        <div className={styles.squareWrapper}>
          <div
            ref={squareRef}
            className={styles.square}
            onClick={handleListOpen}
          >
            <span>{open ? "-" : "+"}</span>
          </div>
          {open && (
            <div className={styles.line} style={{ height: lineHeight }} />
          )}
        </div>
        <div className={styles.buttonContainer}>
          <Button text="日常工作" icon="routineWork" />
          {open && (
            <div className={styles.innerLine} style={{ height: lineHeight }} />
          )}
        </div>
      </div>
      {open && (
        <ul className={styles.list} ref={listRef}>
          {sidebarItems.map((item) => (
            <li key={item.text} className={styles.item}>
              <Button icon={item.icon} text={item.text} />
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default Sidebar;
