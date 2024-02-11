import React from "react";
import Navbar from "../Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer";
import BreadCrumbs from "@/components/commonComponents/BreadCrumbs";

const shouldShowBreadcrumbs = (currentPath) => {
  const excludedPaths = ["/", "/profile", "/login", "/register"];
  return !excludedPaths.includes(currentPath);
};

const MainLayout = () => {
  const { pathname: currentPath } = useLocation();

  return (
    <>
      <Navbar />
      {shouldShowBreadcrumbs(currentPath) && <BreadCrumbs />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
