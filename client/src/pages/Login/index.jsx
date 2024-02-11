import LoginForm from "@/components/LoginPageComponents/LoginForm";
import BreadCrumbs from "@/components/commonComponents/BreadCrumbs";
import React from "react";
import { Helmet } from "react-helmet-async";
import "./index.scss";
// import AuthForm from "@/components/AuthComponents";

const Login = () => {


  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <div id="login-page">
        <div className="login-container">
          <LoginForm/>
        </div>
      </div>
    </>
  );
};

export default Login;
