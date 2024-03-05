import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../AdminNavbar";
import { ThemeProvider } from "@/components/theme-provider";

const AdminLayout = () => {
  return (
    <div className="">
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <div className="">
          <AdminNavbar />
        </div>
        <main className="ml-[250px]">
          <Outlet />
        </main>
      </ThemeProvider>
    </div>
  );
};

export default AdminLayout;
