import React from 'react'
import { Link } from 'react-router-dom'
import { HouseRentAllowance } from "../pages/HouseRentAllowance";
import { AdvanceTax } from "../pages/AdvanceTax";
import styles from "../styles/Navbar.module.css"
function Navbar() {
  return (
    <div className={styles.nav}>
        <Link to="/hra" element={<HouseRentAllowance />} >House Rent Allowance</Link>
        <Link to="/tax" element={<AdvanceTax />} >Advance Tax</Link>
    </div>
  )
}

export { Navbar }