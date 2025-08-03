import React from "react";

import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import NotFound from "../Pages/NotFound";
import ProductPage from "../Pages/ProductPage";
import Userspage from "../Pages/Userspage";
import LoginPage from "../Pages/LoginPage";

export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/user" element={<Userspage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
