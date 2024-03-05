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
        className=" h-screen text-white  text-center flex justify-center items-center"
      >
        {/* <div className="flex flex-col gap-4">
          <div className="verify-container text-6xl">Verify</div>
          <button onClick={handleClick}>Go To Home</button>
        </div> */}

        <div className=" h-[100vh] w-full absolute overflow-hidden ">
        <img
          src="https://images.unsplash.com/photo-1547528114-f4daa226e256?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute h-full  w-full object-cover top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
        ></img>
        <div className=" bg-black bg-opacity-60 flex justify-center items-center flex-col gap-12 w-full h-full text-white absolute z-20 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ">
          <p className="font-italic-font  font-semibold  md:text-7xl">
          Verify
          </p>
          <button onClick={handleClick} className=" text-xl">Go To Home</button>

          
        </div>
        
      </div>

      </main>
    </>
  );
};

export default Verify;
