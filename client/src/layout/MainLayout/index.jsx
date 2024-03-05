import React from "react";
import Navbar from "../Navbar";
import { Outlet, useLocation, useParams } from "react-router-dom";
import Footer from "../Footer";
import BreadCrumbs from "@/components/commonComponents/BreadCrumbs";
import { Toaster } from "@/components/ui/sonner";
import { useGetHotelDetail } from "@/hooks/UseGetHotels";

const shouldShowBreadcrumbs = (currentPath) => {
  const { id } = useParams();
  const excludedPaths = ["/", "/profile", "/login", "/register"];
  // `/detail/${id}`
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
      <Toaster />

      <Footer />
    </>
  );
};

export default MainLayout;
