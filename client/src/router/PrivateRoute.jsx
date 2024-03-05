import Loader from "@/components/commonComponents/Loader";
import { useGetMe } from "@/hooks/UserHooks";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "sonner";

const PrivateRoute = () => {
  const { data: currentUser, isLoading } = useGetMe();

  if(isLoading) {
    return <Loader/>
  }
  console.log('currentUser',currentUser);
  if (
    !currentUser ||
    (currentUser.role !== "admin" && currentUser.role !== "superAdmin")
  ) {
    return <Navigate to="/login" />;
  } else {
    return <Outlet />;
  }
};

export default PrivateRoute;
