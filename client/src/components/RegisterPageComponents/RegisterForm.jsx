import React from "react";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {registerValidationSchema} from "@/utils/validationSchema";
import { userRegister } from "@/hooks/UseAuth";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
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

  const onSubmit = (data) =>{
    console.log(data);
    mutate(data);
    nav('/')
  }

  return (
    <div className="auth-form text-center section-space">
      <h3 className="text-3xl text-white font-medium">Sign Up</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-white text-4xl pb-8 pt-4 font-light">
          Register your account
        </h2>

        <div className="space-y-5">
          <div className="flex flex-col gap-1">
            <Input
              className=" input-transparent placeholder:text-white rounded-3xl"
              placeholder="First name"
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <Input
              className=" input-transparent placeholder:text-white rounded-3xl"
              placeholder="Last name"
              {...register("lastName")}
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <Input
              className=" input-transparent placeholder:text-white rounded-3xl"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* <div className="flex flex-col gap-1">
            <Input
              className=" input-transparent placeholder:text-white rounded-3xl"
              placeholder="Mobile number"
              {...register("mobileNumber")}
            />
            {errors.mobileNumber && (
              <p className="text-red-500">{errors.mobileNumber.message}</p>
            )}
          </div> */}

          <div className="flex flex-col gap-1">
            <Input
              className=" input-transparent placeholder:text-white rounded-3xl"
              placeholder="User name"
              {...register("userName")}
            />
            {errors.userName && (
              <p className="text-red-500">{errors.userName.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <Input
              className=" input-transparent placeholder:text-white rounded-3xl"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* <div className="flex flex-col gap-1">
            <Input
              className=" input-transparent placeholder:text-white rounded-3xl"
              placeholder="Confirm password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div> */}

          <div>
            <button
              className="border bg-[#fbceb5] rounded-3xl text-xl w-full py-2"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </div>

        <div className=" py-3 space-y-3">
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
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
