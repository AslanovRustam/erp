import { useEffect, useState } from "react";
import styles from "./Table.module.css";
import data from "../../constants/data.json";

// Local storage key for persisting table data
const LOCAL_KEY = "editable_table_data";

interface RowData {
  code: string;
  quantity: number;
  price: number;
}

const Table = () => {
  // Initialize table rows from localStorage or default data
  const [rows, setRows] = useState<Record<string, RowData>>(() => {
    const saved = localStorage.getItem(LOCAL_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Error localStorage", e);
      }
    }
    // Fallback to default structure using product list from JSON
    return data.products.reduce((acc, product) => {
      acc[product.id] = {
        code: product.id,
        quantity: 0,
        price: product.price,
      };
      return acc;
    }, {} as Record<string, RowData>);
  });

  // Save changes to localStorage on every update
  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(rows));
  }, [rows]);

  // Generic handler for field changes (code, quantity, price)
  const handleChange = (id: string, field: keyof RowData, value: string) => {
    setRows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]:
          field === "quantity" || field === "price" ? Number(value) : value,
      },
    }));
  };

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th></th>
            <th>項次</th>
            <th>產品編號</th>
            <th className={styles.blue}>單價</th>
            <th>數量</th>
            <th>小計</th>
            <th>倉庫</th>
            <th>品名規格</th>
            <th>單位</th>
            <th>附</th>
          </tr>
        </thead>
        <tbody>
          {data.products.map(({ id, name, unit }, index) => {
            const row = rows[id];
            const subtotal = (row.price * row.quantity).toFixed(2);
            return (
              <tr key={id}>
                <td className={styles.activeRowArrow}>{index + 1}</td>
                <td className={styles.item}>{name}</td>
                <td className={styles.productNumber}>
                  <input
                    className={styles.input}
                    value={row.code}
                    onChange={(e) => handleChange(id, "code", e.target.value)}
                  />
                </td>
                <td className={styles.unitPrice}>
                  <input
                    type="number"
                    className={styles.input}
                    value={row.price}
                    onChange={(e) => handleChange(id, "price", e.target.value)}
                  />
                </td>
                <td className={styles.quantity}>
                  <input
                    type="number"
                    className={styles.input}
                    value={row.quantity}
                    onChange={(e) =>
                      handleChange(id, "quantity", e.target.value)
                    }
                  />
                </td>
                <td className={styles.subtotal}>{subtotal}</td>
                <td className={styles.warehouse}></td>
                <td className={styles.productNameStandards}>{unit}</td>
                <td className={styles.taxCategory}></td>
                <td className={styles.attachedUnit}></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
