import React, { useState } from "react";
import styles from "../../styles/Deduction.module.css";

function Deduction({ handleChange }) {
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div className={styles.container}>
      <div>
        <label>Life Insurance premium paid</label>
        <input type="number" onChange={handleChange} />
      </div>
      <div>
        <label>Payment for annuity plan</label>
        <input type="number" onChange={handleChange} />
      </div>
      <div>
        <label>Contribution toward provident fund / PPF</label>
        <input type="number" onChange={handleChange} />
      </div>
      <div>
        <label>Investment in NSC (VIII issue) + Interest</label>
        <input type="number" onChange={handleChange} />
      </div>
      <div>
        <label>Contribution toward ULIP</label>
        <input type="number" onChange={handleChange} />
      </div>
      <div>
        <label>Contribution toward notified pension fund by MF/UTI</label>
        <input type="number" onChange={handleChange} />
      </div>
      <div>
        <label></label>
        <input type="number" onChange={handleChange} />
      </div>
      <div>
        <label>Re-payment of housing loan etc</label>
        <input type="number" onChange={handleChange} />
      </div>
      <div>
        <label>Tuition fees paid for children</label>
        <input type="number" onChange={handleChange} />
      </div>
      <div>
        <label>5 Years fixed deposit with PO or Schedule Bank</label>
        <input type="number" onChange={handleChange} />
      </div>
      <div>
        <label>Contribution toward NPF</label>
        <input type="number" onChange={handleChange} />
      </div>
      <div>
        <label>
          Employee's / Self-employed contribution toward NPS (up to 20%) (u/s
          80CCD)
        </label>
        <input type="number" onChange={handleChange} />
      </div>
      <div>
        <label>Additional contribution towards NPS [u/s 80CCD(1B)]</label>
        <input type="number" onChange={handleChange} />
      </div>
      <div>
        <label>Employer's contribution toward NPS (u/s 80CCD)</label>
        <input type="number" onChange={handleChange} />
      </div>
      <div>
        <label>Deposit with Sukanya Samridhi Accounts</label>
        <input type="number" onChange={handleChange} />
      </div>
      <div>
        <label>Any other deductable (u/s 80C)</label>
        <input type="number" onChange={handleChange} />
      </div>
      <div className={styles.total}>
        <label>Total</label>
        <input type="number" onChange={handleChange} disabled={isDisabled} />
      </div>
      <div>
        <label>Medi-claim premium (u/s 80D)</label>
        <input type="number" onChange={handleChange} />
      </div>
      <div>
        <label>Actual payment towards medical treatment (u/s 80DDB )</label>
        <input type="number" onChange={handleChange} />
      </div>
      <div>
        <label>Interest payable on loan for residentials house property (u/s 80EEA )</label>
        <input type="number" onChange={handleChange} />
      </div>
      <div>
        <label>Interest payable on loan for purchase of electric vehicles(u/s 80EEB )</label>
        <input type="number" onChange={handleChange} />
      </div>
      <div>
        <label>Donations (u/s 80G)</label>
        <input type="number" onChange={handleChange} />
      </div>
      <div>
        <label>Deduction for maintenance / medical treatment of dependent (u/s 80DD)</label>
        <input type="number" onChange={handleChange} />
      </div>
      <div>
        <div>
          <input type="checkbox" />
          <span>Tick if 80DD is claimed</span>
        </div>
      </div>
      <div>
        <div>
          <input type="checkbox" />
          <span>Tick if severe disability</span>
        </div>
      </div>
      <div>
        <label>Interest on loan for higher education (u/s 80E)</label>
        <input type="number" onChange={handleChange} />
      </div>
      <div>
        <label>Interest on loan taken for Residential House (u/s 80EE)</label>
        <input type="number" onChange={handleChange} />
      </div>
      <div>
        <label>Deduction in case of a person with disability (u/s 80U)</label>
        <input type="number" onChange={handleChange} />
      </div>
      <div>
        <div>
          <input type="checkbox" />
          <span>Tick if 80DD is claimed</span>
        </div>
      </div>
      <div>
        <div>
          <input type="checkbox" />
          <span>Tick if severe disability</span>
        </div>
      </div>
      <div>
        <label>Interest on deposits(u/s 80TTB)</label>
        <input type="number" onChange={handleChange} />
      </div>
      <div>
        <label>Contribution to Agnipath Scheme (u/s 80CCH)</label>
        <input type="number" onChange={handleChange} />
      </div>
      <div>
        <label>Any other deductions</label>
        <input type="number" onChange={handleChange} />
      </div>
    </div>
  );
}

export { Deduction };
