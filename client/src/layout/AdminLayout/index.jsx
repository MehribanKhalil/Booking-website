import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../AdminNavbar";

const AdminLayout = () => {
  return (
    <div className="">

      <div className="">
        <AdminNavbar />
      </div>
      <main className="ml-[250px]">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
