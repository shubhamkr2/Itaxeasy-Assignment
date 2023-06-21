import React, { useState } from 'react'
import styles from "../../styles/AdvanceTax.module.css";

function Domestic({ handleChange }) {
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <>
      <div>
        <label>Net Taxable Income</label>
        <input type="number" onChange={handleChange} disabled={isDisabled} />
      </div>
      <div className={styles.bg_gray}>
        <label>Income Tax</label>
        <input type="number" onChange={handleChange} disabled={isDisabled} />
      </div>
      <div>
        <label>Surcharge</label>
        <input type="number" onChange={handleChange} disabled={isDisabled} />
      </div>
      <div>
        <label>Health and Education Cess</label>
        <input type="number" onChange={handleChange} disabled={isDisabled} />
      </div>
      <div className={styles.bg_gray}>
        <label className={styles.bg_gray}>Total Tax Liability</label>
        <input type="number" onChange={handleChange} disabled={isDisabled} />
      </div>
      <div>
        <label>Relief</label>
        <input type="number" value={""} />
      </div>
      <div className={styles.bg_gray}>
        <label>TDS/TCS/MAT (AMT) Credit Utilized</label>
        <input type="number" value={""} />
      </div>
      <div>
        <label>Assessed Tax</label>
        <input type="number" value={""} disabled={isDisabled} />
      </div>
    </>
  );
}

export { Domestic };
