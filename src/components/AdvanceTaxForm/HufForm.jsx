import React, { useState } from "react";
import styles from "../../styles/AdvanceTax.module.css";

function Huf({ setHufFormData, hufFormData }) {
  const [isDisabled, setIsDisabled] = useState(true);

  function handleChange(e) {
    const { name, value } = e.target;
    setHufFormData({ ...hufFormData, [name]: value });
  }
  console.log(hufFormData);
  return (
    <>
      <div>
        <label>Whether opting for taxation under Section 115BAC?</label>
        <select
          onChange={(e)=>handleChange(e)}
          name="opting_for_tax"
          value={hufFormData.opting_for_tax}
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div>
        <label>Net Taxable Income</label>
        <input type="number" disabled={isDisabled} />
      </div>
      <div className={styles.bg_gray}>
        <label>Income Tax</label>
        <input type="number" disabled={isDisabled} />
      </div>
      <div>
        <label>Surcharge</label>
        <input type="number" disabled={isDisabled} />
      </div>
      <div>
        <label>Health and Education Cess</label>
        <input type="number" disabled={isDisabled} />
      </div>
      <div className={styles.bg_gray}>
        <label className={styles.bg_gray}>Total Tax Liability</label>
        <input type="number" disabled={isDisabled} />
      </div>
      <div>
        <label>Relief</label>
        <input
          type="number"
          name="relief"
          value={hufFormData.relief}
          onChange={(e)=>handleChange(e)}
        />
      </div>
      <div className={styles.bg_gray}>
        <label>TDS/TCS/MAT (AMT) Credit Utilized</label>
        <input
          type="number"
          name="credit_utilized"
          value={hufFormData.credit_utilized}
          onChange={(e)=>handleChange(e)}
        />
      </div>
      <div>
        <label>Assessed Tax</label>
        <input type="number" value={""} disabled={isDisabled} />
      </div>
    </>
  );
}

export { Huf };
