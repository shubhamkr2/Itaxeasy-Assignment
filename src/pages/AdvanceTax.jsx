import React, { useState } from "react";
import styles from "../styles/AdvanceTax.module.css";
import { Default } from "../components/AdvanceTaxForm/Default";
import { Huf } from "../components/AdvanceTaxForm/HufForm";
import { Aops } from "../components/AdvanceTaxForm/Aops";
import { Domestic } from "../components/AdvanceTaxForm/Domestic";
import { Foreign } from "../components/AdvanceTaxForm/Foreign";
import { Firms } from "../components/AdvanceTaxForm/Firms";
import { Llp } from "../components/AdvanceTaxForm/Llp";
import { CoOperative } from "../components/AdvanceTaxForm/CoOperative";
import { Individual } from "../components/AdvanceTaxForm/Individual";

const initialState = {};

function AdvanceTax() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [formdata, setFormData] = useState(initialState);
  const [isTaxPayer, setIsTaxPayer] = useState("");

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : +value;
    setFormData({ ...formdata, [name]: val });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleReset() {
    // setExemptedHRA(0);
    // setTaxableHRA(0);
    // setFormData(initialState);
  }
  return (
    <div className={styles.main_container}>
      <div className={styles.sub_container}>
        <div className={styles.heading}>ADVANCE TAX CALCULATOR</div>
        <form onSubmit={handleSubmit}>
          <div className={styles.bg_gray}>
            <label>Tax Payer</label>
            <select onChange={(e)=>setIsTaxPayer(e.target.value)}>
              <option value="">
                Select
              </option>
              <option value="Individual">Individual</option>
              <option value="HUF">HUF</option>
              <option value="AOPs/BOI">AOPs/BOI</option>
              <option value="Domestic Company">Domestic Company</option>
              <option value="Foreign Company">Foreign Company</option>
              <option value="Firms">Firms</option>
              <option value="LLP">LLP</option>
              <option value="Co-operative Society">Co-operative Society</option>
            </select>
          </div>
          {isTaxPayer === "" ? <Default handleChange={handleChange} /> : ""}
          {isTaxPayer === "Individual" ? <Individual handleChange={handleChange} /> : ""}
          {isTaxPayer === "HUF" ? <Huf handleChange={handleChange} /> : ""}
          {isTaxPayer === "AOPs/BOI" ? <Aops handleChange={handleChange} /> : ""}
          {isTaxPayer === "Domestic Company" ? <Domestic handleChange={handleChange} /> : ""}
          {isTaxPayer === "Foreign Company" ? <Foreign handleChange={handleChange} /> : ""}
          {isTaxPayer === "Firms" ? <Firms handleChange={handleChange} /> : ""}
          {isTaxPayer === "LLP" ? <Llp handleChange={handleChange} /> : ""}
          {isTaxPayer === "Co-operative Society" ? <CoOperative handleChange={handleChange} /> : ""}
          <div className={styles.calculate_reset_btn}>
            <button className={styles.calculate_btn} type="submit">
              Calculate
            </button>
            <button
              className={styles.reset_btn}
              type="button"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export { AdvanceTax };
