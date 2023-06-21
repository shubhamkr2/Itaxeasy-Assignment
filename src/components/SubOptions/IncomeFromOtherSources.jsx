import React, { useState } from "react";
import styles from "../../styles/IncomeFromOtherSources.module.css";

function IncomeFromOtherSources({ handleChange }) {
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div className={styles.container}>
      <div>
        <label>Interest</label>
        <input type="number" onChange={handleChange} />
      </div>
      <div>
        <label>Commission/Other Income</label>
        <input type="number" onChange={handleChange} />
      </div>
      <div>
        <label>Winnings from Lottery, Crossword Puzzles, etc.</label>
        <input type="number" onChange={handleChange} />
      </div>
    </div>
  );
}

export { IncomeFromOtherSources };
