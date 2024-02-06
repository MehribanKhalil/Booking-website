import React from "react";
import Navbar from "../Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer";
import BreadCrumbs from "@/components/commonComponents/BreadCrumbs";

const MainLayout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Navbar />
      {pathname === "/" ? "" : <BreadCrumbs />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
