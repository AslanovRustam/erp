import type { FC } from "react";
import { IconContext } from "react-icons";
import { ICONS } from "../../constants/icons";
import styles from "./button.module.css";

interface ButtonProps {
  text: string;
  icon: keyof typeof ICONS;
  tooltip?: boolean;
}

const Button: FC<ButtonProps> = ({ text, icon, tooltip }) => {
  const Icon = ICONS[icon]; // Get the icon component from the icon map
  return (
    <button
      className={`${styles.menuButton} ${tooltip ? styles.tooltip : ""}`}
      type="button"
    >
      {/* Provide icon context (e.g., color) to all child icons */}
      <IconContext.Provider value={{ color: "currentColor" }}>
        <Icon className={styles.icon} />
      </IconContext.Provider>
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export default Button;
