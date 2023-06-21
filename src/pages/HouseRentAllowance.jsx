import React, { useState } from "react";
import styles from "../styles/HouseRentAllowance.module.css";

const initialState = {
  salary: "",
  da: "",
  commission: "",
  hra: "",
  rent: "",
  isMetroCity: false,
};

function HouseRentAllowance() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [formdata, setFormData] = useState(initialState);
  const [exemptedHRA, setExemptedHRA] = useState();
  const [taxableHRA, setTaxableHRA] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    const { salary, da, commission, hra, rent, isMetroCity } = formdata;

    const maximumHRA = isMetroCity
      ? 0.5 * (salary + da + commission)
      : 0.4 * (salary + da + commission);
    const maximumHRA2 = rent - 0.1 * (salary + da + commission);
    const minimumHRA = Math.min(hra, maximumHRA);
    const exemptedHRA =
      Math.min(maximumHRA2, minimumHRA) > 0
        ? Math.min(maximumHRA2, minimumHRA)
        : 0;
    const taxableHRA = hra - exemptedHRA;
    setExemptedHRA(exemptedHRA);
    setTaxableHRA(taxableHRA);

    // console.log(exemptedHRA, taxableHRA);
  }

  function handleReset() {
    setExemptedHRA(0);
    setTaxableHRA(0);
    setFormData(initialState);
  }
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : +value;
    setFormData({ ...formdata, [name]: val });
  }
  console.log(formdata);
  return (
    <div className={styles.main_container}>
      <div className={styles.sub_container}>
        <div className={styles.heading}>HOUSE RENT ALLOWANCE</div>
        <form onSubmit={handleSubmit}>
          <div className={styles.bg_gray}>
            <label>Basic salary</label>
            <input
              type="number"
              name="salary"
              value={formdata.salary}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>DA forming part of salary</label>
            <input
              type="number"
              name="da"
              value={formdata.da}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.bg_gray}>
            <label>
              Commission (as % of turnover achieved by the employee)
            </label>
            <input
              type="number"
              name="commission"
              value={formdata.commission}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>HRA Received</label>
            <input
              type="number"
              name="hra"
              value={formdata.hra}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.bg_gray}>
            <label>Rent Paid</label>
            <input
              type="number"
              name="rent"
              value={formdata.rent}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Tick if residing in metro city.</label>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                name="isMetroCity"
                checked={formdata.isMetroCity}
                onChange={handleChange}
              />
              <span>(Tick if Yes)</span>
            </div>
          </div>
          <div className={styles.bg_gray} id={styles.exempted_taxable}>
            <label>Exempted House Rent Allowance</label>
            <input type="number" disabled={isDisabled} value={exemptedHRA} />
          </div>
          <div>
            <label>Taxable House Rent Allowance</label>
            <input type="number" disabled={isDisabled} value={taxableHRA} />
          </div>
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

export { HouseRentAllowance };
