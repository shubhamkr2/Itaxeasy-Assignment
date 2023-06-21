import React, { useState } from "react";
import styles from "../../styles/AdvanceTax.module.css";
import { IncomeFromHouseProperty } from "../SubOptions/IncomeFromHouseProperty";
import { IncomeFromOtherSources } from "../SubOptions/IncomeFromOtherSources";
import { Deduction } from "../SubOptions/Deduction";

function Individual({ handleChange }) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [propertySubOptionOpen, setPropertySubOptionOpen] = useState(false);
  const [capitalSubOptionOpen, setCapitalSubOptionOpen] = useState(false);
  const [otherSourceSubOptionOpen, setOtherSourceSubOptionOpen] =
    useState(false);
  const [deduction, setDeductionSubOptionOpen] = useState(false);

  return (
    <>
      <div>
        <label>Whether opting for taxation under Section 115BAC?</label>
        <select>
          <option selected="selected" value="Select">
            Select
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className={styles.bg_gray}>
        <label>Male / Female / Senior Citizen</label>
        <select>
          <option selected="selected" value="Select">
            Select
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Senior Citizen">Senior Citizen</option>
          <option value="Super Senior Citizen">Super Senior Citizen</option>
        </select>
      </div>
      <div>
        <label>Residential Status</label>
        <select>
          <option selected="selected" value="Select">
            Select
          </option>
          <option value="Resident">Resident</option>
          <option value="Non-Resident">Non-Resident</option>
          <option value="Not Ordinary Resident">Not Ordinary Resident</option>
        </select>
      </div>
      <div className={styles.bg_gray}>
        <label>
          Income from Salary (Income from salary after standard deduction of
          Rs.50000.)
        </label>
        <input type="number" onChange={handleChange} />
      </div>
      <div>
        <label>Income From House Property</label>
        <div className={styles.more_options}>
          {propertySubOptionOpen ? (
            <span
              onClick={() => setPropertySubOptionOpen(!propertySubOptionOpen)}
            >
              Hide Details
            </span>
          ) : (
            <span
              onClick={() => setPropertySubOptionOpen(!propertySubOptionOpen)}
            >
              Show Details
            </span>
          )}
          <input type="number" onChange={handleChange} disabled={isDisabled} />
        </div>
      </div>
      {propertySubOptionOpen ? <IncomeFromHouseProperty /> : ""}
      <div>
        <label>Capital Gains</label>
        <div className={styles.more_options}>
          {capitalSubOptionOpen ? (
            <span
              onClick={() => setCapitalSubOptionOpen(!capitalSubOptionOpen)}
            >
              Hide Details
            </span>
          ) : (
            <span
              onClick={() => setCapitalSubOptionOpen(!capitalSubOptionOpen)}
            >
              Show Details
            </span>
          )}
          <input type="number" onChange={handleChange} disabled={isDisabled} />
        </div>
      </div>
      <div className={styles.bg_gray}>
        <label>Income From Other Sources</label>
        <div className={styles.more_options}>
          {otherSourceSubOptionOpen ? (
            <span
              onClick={() =>
                setOtherSourceSubOptionOpen(!otherSourceSubOptionOpen)
              }
            >
              Hide Details
            </span>
          ) : (
            <span
              onClick={() =>
                setOtherSourceSubOptionOpen(!otherSourceSubOptionOpen)
              }
            >
              Show Details
            </span>
          )}
          <input type="number" onChange={handleChange} disabled={isDisabled} />
        </div>
      </div>
      {otherSourceSubOptionOpen? <IncomeFromOtherSources />:"" }
      <div>
        <label>
          Profits and Gains of Business or Profession (enter profit only)
        </label>
        <input type="number" onChange={handleChange} />
      </div>
      <div className={styles.bg_gray}>
        <label className={styles.bg_gray}>Agricultural Income</label>
        <input type="number" onChange={handleChange} />
      </div>
      <div>
        <label>Deductions</label>
        <div className={styles.more_options}>
          {deduction ? (
            <span onClick={() => setDeductionSubOptionOpen(!deduction)}>
              Hide Details
            </span>
          ) : (
            <span onClick={() => setDeductionSubOptionOpen(!deduction)}>
              Show Details
            </span>
          )}
          <input type="number" onChange={handleChange} disabled={isDisabled} />
        </div>
      </div>
      {deduction? <Deduction />:"" }
      <div>
        <label>Net Taxable Income</label>
        <input type="number" onChange={handleChange} disabled={isDisabled} />
      </div>
      <div className={styles.bg_gray} id={styles.small_input}>
        <div className={styles.two_input_label}>
          <label>Income Liable to Tax at Normal Rate ---</label>
        </div>
        <div className={styles.small_input}>
          <input type="number" onChange={handleChange} disabled={isDisabled} />
          <input type="number" onChange={handleChange} disabled={isDisabled} />
        </div>
      </div>
      <div id={styles.small_input}>
        <div className={styles.two_input_label}>
          <label>Short Term Capital Gains (Covered u/s 111A) 15%</label>
        </div>
        <div className={styles.small_input}>
          <input type="number" onChange={handleChange} disabled={isDisabled} />
          <input type="number" onChange={handleChange} disabled={isDisabled} />
        </div>
      </div>
      <div className={styles.bg_gray} id={styles.small_input}>
        <div className={styles.two_input_label}>
          <label>Long Term Capital Gains (Covered u/s 112A) 10%</label>
        </div>
        <div className={styles.small_input}>
          <input type="text" onChange={handleChange} />
          <input type="text" onChange={handleChange} />
        </div>
      </div>
      <div id={styles.small_input}>
        <div className={styles.two_input_label}>
          <label>Long Term Capital Gains (Charged to tax @ 20%) 20%</label>
        </div>
        <div className={styles.small_input}>
          <input type="number" onChange={handleChange} disabled={isDisabled} />
          <input type="number" onChange={handleChange} disabled={isDisabled} />
        </div>
      </div>
      <div className={styles.bg_gray} id={styles.small_input}>
        <div className={styles.two_input_label}>
          <label>Long Term Capital Gains (Charged to tax @ 10%) 10%</label>
        </div>
        <div className={styles.small_input}>
          <input type="number" onChange={handleChange} disabled={isDisabled} />
          <input type="number" onChange={handleChange} disabled={isDisabled} />
        </div>
      </div>
      <div id={styles.small_input}>
        <div className={styles.two_input_label}>
          <label>Winnings from Lottery, Crossword Puzzles, etc) 30%</label>
        </div>
        <div className={styles.small_input}>
          <input type="number" onChange={handleChange} disabled={isDisabled} />
          <input type="number" onChange={handleChange} disabled={isDisabled} />
        </div>
      </div>

      <div className={styles.bg_gray}>
        <label>Income Tax after relief u/s 87A</label>
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
        <label>Relief other than relief u/s 87A</label>
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

export { Individual };
