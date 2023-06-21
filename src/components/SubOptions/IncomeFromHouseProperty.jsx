import React, { useState } from "react";
import styles from "../../styles/IncomeFromHouseProperty.module.css";

function IncomeFromHouseProperty({ handleChange }) {
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div className={styles.container}>
      <label>a. Income from Self-occupied Property</label>
      <label>Interest Paid/Payable on Housing Loan</label>
      <div>
        <label>1. Interest on Housing Loan</label>
        <input type="number" onChange={handleChange} />
      </div>
      <div>
        <label>Income from self-occupied house property</label>
        <input type="number" onChange={handleChange} disabled={isDisabled}/>
      </div>
       <label>b. Income from Let-out Property</label>
  <div>
    <label>1. Annual Letable Value/Rent Received or Receivable</label>
    <input type="number" onChange={handleChange} />
  </div>
  <div>
    <label>2. Less: Municipal Taxes Paid During the Year</label>
    <input type="number" onChange={handleChange} />
  </div>
  <div>
    <label>3. Less:Unrealized Rent</label>
    <input type="number" onChange={handleChange} />
  </div>
  <div>
    <label>4. Net Annual Value (1-(2+3))</label>
    <input type="number" onChange={handleChange} disabled={isDisabled} />
  </div>

  <label>Less: Deductions from Net Annual Value</label>
  <div>
    <label>i. Standard Deduction @ 30% of Net Annual Value</label>
    <input type="number" onChange={handleChange} disabled={isDisabled} />
  </div>
  <div>
    <label>ii. Interest on Housing Loan</label>
    <input type="number" onChange={handleChange} />
  </div>
  <div>
    <label>Income from Let-out House Property</label>
    <input type="number" onChange={handleChange} disabled={isDisabled} />
  </div>
    </div>



  );
}

export { IncomeFromHouseProperty };
