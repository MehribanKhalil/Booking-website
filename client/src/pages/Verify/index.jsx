import { authVerify } from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";
import { Button } from "antd";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
// import AuthForm from "@/components/AuthComponents";

const Verify = () => {
  const location = useLocation();
  const token = new URLSearchParams(location.search).get("token");

  const verifyEmailMutation = useMutation({
    mutationFn: () => authVerify(token),
    onSuccess: (data) => toast.success(data.message),
  });
  useEffect(() => {
    if (token) {
      verifyEmailMutation.mutate();
    }
  }, [location.search]);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <Helmet>
        <title>Verify</title>
      </Helmet>

      <main
        id="verify-page"
        className="bg-black h-screen text-white  text-center flex justify-center items-center"
      >
        <div className="flex flex-col gap-4">
          <div className="verify-container text-6xl">Verify</div>
          <button onClick={handleClick}>Go To Home</button>
        </div>
      </main>
    </>
  );
};

export default Verify;
