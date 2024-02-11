import React from "react";
import { Helmet } from "react-helmet-async";
import './index.scss'
import RegisterForm from "@/components/RegisterPageComponents/RegisterForm";

const Register = () => {


  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>

      <div id="register-page">
        <div className="register-container">

          <RegisterForm/>

        </div>
      </div>
      

    </>
  );
};

export default Register;
