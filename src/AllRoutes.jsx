import React from "react";
import { Route, Routes } from "react-router-dom";
import { HouseRentAllowance } from "./pages/HouseRentAllowance";
import { AdvanceTax } from "./pages/AdvanceTax";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HouseRentAllowance />} />
      <Route path="/hra" element={<HouseRentAllowance />} />
      <Route path="/tax" element={<AdvanceTax />} />
    </Routes>
  );
}

export { AllRoutes };