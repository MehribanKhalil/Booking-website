import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {registerValidationSchema} from "@/utils/validationSchema";
import { userRegister } from "@/hooks/UseAuth";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";


const RegisterForm = () => {
  const [passwordSeen, setPasswordSeen] = useState(false)
  const { mutate } = userRegister(); 
  const nav=useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      // mobileNumber: "",
      password: "",
      userName: "",
      // confirmPassword: "",
    },
  });

  const handlePasswordSeen=()=>{
    setPasswordSeen(!passwordSeen)
  }

  const onSubmit = (data) =>{
    console.log(data);
    mutate(data);
    reset()
    // nav('/')
  }

  return (
    <div className="auth-form text-center section-space">
      <h3 className="text-3xl text-white font-medium">Sign Up</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-white text-4xl pb-8 pt-4 font-light">
          Register your account
        </h2>

        <div className="space-y-5 max-w-[280px] sm:max-w-[500px]">
          <div className="flex flex-col gap-1">
            <Input
              className=" bg-white bg-opacity-25 hover:bg-transparent  duration-300 rounded-full   border-transparent hover:border hover:border-white  w-[280px] mx-auto sm:w-[500px]   text-white  placeholder:text-white"
              placeholder="First name"
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <Input
              className="bg-white bg-opacity-25 hover:bg-transparent  duration-300 rounded-full   border-transparent hover:border hover:border-white  w-[280px] mx-auto sm:w-[500px]  text-white  placeholder:text-white"
              placeholder="Last name"
              {...register("lastName")}
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <Input
              className="bg-white bg-opacity-25 hover:bg-transparent  duration-300 rounded-full   border-transparent hover:border hover:border-white  w-[280px] mx-auto sm:w-[500px]  text-white  placeholder:text-white"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* <div className="flex flex-col gap-1">
            <Input
              className="bg-white bg-opacity-25 hover:bg-transparent  duration-300 rounded-full   border-transparent hover:border hover:border-white   text-white  placeholder:text-white"
              placeholder="Mobile number"
              {...register("mobileNumber")}
            />
            {errors.mobileNumber && (
              <p className="text-red-500">{errors.mobileNumber.message}</p>
            )}
          </div> */}

          <div className="flex flex-col gap-1">
            <Input
              className="bg-white bg-opacity-25 hover:bg-transparent  duration-300 rounded-full   border-transparent hover:border hover:border-white  w-[280px] mx-auto sm:w-[500px]  text-white  placeholder:text-white "
              placeholder="User name"
              {...register("userName")}
            />
            {errors.userName && (
              <p className="text-red-500">{errors.userName.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
           <div className="bg-white bg-opacity-25 hover:bg-transparent  duration-300 rounded-full   border-transparent hover:border hover:border-white  w-[280px] mx-auto sm:w-[500px]  text-white   flex pr-3">
           <Input
              className=" border-none outline-none bg-transparent placeholder:text-white"
              placeholder="Password"
              type={ passwordSeen ? 'text': 'password'}
              {...register("password")}
              
            />
            <button type="button" onClick={handlePasswordSeen}>
              {
                passwordSeen ?  <FaRegEye size={20} />  : <FaRegEyeSlash size={20} />
              }
            </button>
           </div>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* <div className="flex flex-col gap-1">
            <Input
              className="bg-white bg-opacity-25 hover:bg-transparent  duration-300 rounded-full   border-transparent hover:border hover:border-white   text-white  placeholder:text-white"
              placeholder="Confirm password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div> */}

          <div>
            <button
              className=" bg-mainColor text-white px-8 font-medium text-lg  rounded-full w-full py-2"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </div>

        <div>
            <p className=" text-white font-semibold pt-2">Already have an account ?<Link className="  text-mainColor " to={'/login'}> Log in now</Link></p>

          </div>

        {/* <div className=" py-3 space-y-3">
          <p className=" text-white text-lg">— Or Continue with With —</p>
          <div className=" flex justify-center">
            <button className="flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-5 py-3 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
                alt=""
                className=" w-5 h-5"
              />
              <span>Continue with Google</span>
            </button>
          </div>
        </div> */}
      </form>
    </div>
  );
};

export default RegisterForm;
