import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../componnents/Navbar";
import Footer from "../componnents/Footer";

const MainLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

export default MainLayout;
