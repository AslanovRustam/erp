import { ChangeEvent, useState, type FC } from "react";
import styles from "./form.module.css";
import CustomInput from "../Input/Input";
import data from "../../constants/data.json";

interface FormProps {}

const Form: FC<FormProps> = () => {
  const [formData, setFormData] = useState<Record<string, string>>({
    salesId: "",
    subtotal: "",
    accountDate: "",
    note: "",
    salesDate: "",
    discount: "",
    installer: "",
    paid: "",
    customer: "",
    taxAmount: "",
    fullName: "",
    remaining: "",
    customerTitle: "",
    salesperson: "",
    warehouse: "",
    isLend: "",
    clearDate: "",
    finalSalesId: "",
    taxType: "",
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? String(checked) : value,
    }));
  };

  return (
    <form className={styles.form}>
      <div className={styles.container}>
        <div className={styles.box}>
          <CustomInput
            label="銷售單號"
            classname="part"
            name="salesId"
            value={formData.salesId}
            onChange={handleChange}
          />
          <CustomInput
            label="未稅小計"
            classname="part"
            value={formData.subtotal}
            onChange={handleChange}
            name="subtotal"
          />
          <CustomInput
            label="帳款日期"
            classname="part"
            value={formData.accountDate}
            onChange={handleChange}
            name="accountDate"
          />
          <CustomInput
            label="附記事項"
            classname="part"
            value={formData.note}
            onChange={handleChange}
            name="note"
          />
        </div>
        <div className={styles.box}>
          <CustomInput
            label="銷售日期"
            classname="small"
            value={formData.salesDate}
            onChange={handleChange}
            name="salesDate"
          />
          <CustomInput
            label="折讓金額"
            classname="small"
            value={formData.discount}
            onChange={handleChange}
            name="discount"
          />
          <CustomInput
            label="安裝人員"
            classname="small"
            value={formData.installer}
            onChange={handleChange}
            name="installer"
          />
          <CustomInput
            label="已付金額"
            classname="small"
            value={formData.paid}
            onChange={handleChange}
            name="paid"
          />
        </div>
        <div className={styles.box}>
          <CustomInput
            label="客戶編號"
            classname="small"
            type="select"
            options={data.customers}
            name="customer"
            value={formData.customer}
            onChange={handleChange}
          />
          <CustomInput
            label="稅額"
            classname="small"
            value={formData.taxAmount}
            onChange={handleChange}
            name="taxAmount"
          />
          <CustomInput
            label="姓 生名"
            classname="small"
            value={formData.fullName}
            onChange={handleChange}
            name="fullName"
          />
          <CustomInput
            label="未償還金額"
            classname="small"
            value={formData.remaining}
            name="remaining"
            onChange={handleChange}
          />
        </div>
        <div className={styles.box}>
          <CustomInput
            label="客戶寶號"
            classname="part"
            value={formData.customerTitle}
            onChange={handleChange}
            name="customerTitle"
          />
          <div className={styles.boxWrapper}>
            <CustomInput
              label="銷售人員"
              classname="medium"
              type="select"
              options={data.salespersons}
              name="salesperson"
              value={formData.salesperson}
              onChange={handleChange}
            />
            <input className={styles.input} type="text" disabled />
          </div>
          <div className={styles.boxWrapper}>
            <CustomInput
              label="預設倉庫"
              classname="tiny"
              type="select"
              options={data.warehouses}
              name="warehouse"
              value={formData.warehouse}
              onChange={handleChange}
            />
            <CustomInput
              label="是否借出"
              classname="checkbox"
              type="checkbox"
              name="isLend"
              value={formData.isLend}
              onChange={handleChange}
            />
          </div>

          <CustomInput
            label="結清日期"
            classname="medium"
            name="clearDate"
            value={formData.clearDate}
            onChange={handleChange}
          />
        </div>
        <label className={styles.tax}>
          <span>稅別</span>
          <div className={styles.radioGroup}>
            <label>
              <input
                type="radio"
                name="taxType"
                value="exempt"
                checked={formData.taxType === "exempt"}
                onChange={handleChange}
              />
              免稅
            </label>
            <label>
              <input
                type="radio"
                name="taxType"
                value="add"
                checked={formData.taxType === "add"}
                onChange={handleChange}
              />
              外加
            </label>
            <label>
              <input
                type="radio"
                name="taxType"
                value="include"
                checked={formData.taxType === "include"}
                onChange={handleChange}
              />
              內含
            </label>
          </div>
        </label>
      </div>
      <CustomInput
        label="銷售單號"
        classname="full"
        name="finalSalesId"
        value={formData.finalSalesId}
        onChange={handleChange}
      />
    </form>
  );
};

export default Form;
