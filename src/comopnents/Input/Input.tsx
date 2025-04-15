import { type FC } from "react";
import styles from "./input.module.css";

interface Option {
  id: string;
  name: string;
}

interface CustomInputProps {
  label?: string;
  classname?: string;
  type?: string;
  options?: Option[];
  name?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

const CustomInput: FC<CustomInputProps> = ({
  label,
  classname,
  type,
  options = [],
  name,
  value = "",
  onChange,
}) => {
  return (
    <label className={`${styles.lablel} ${classname && styles[classname]}`}>
      {label && <span className={styles.text}>{label}</span>}
      {type === "select" ? (
        <select
          className={styles.input}
          value={value}
          onChange={onChange}
          name={name}
        >
          <option value="">請選擇</option>
          {options.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.name}
            </option>
          ))}
        </select>
      ) : (
        <input
          className={styles.input}
          type={type || "text"}
          value={value}
          onChange={onChange}
          name={name}
        />
      )}
    </label>
  );
};

export default CustomInput;
