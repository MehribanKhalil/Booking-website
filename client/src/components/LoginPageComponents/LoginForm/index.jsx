import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Checkbox } from "@/components/ui/checkbox";
import { loginValidationSchema } from "@/utils/validationSchema";
import { userLogin } from "@/hooks/UseAuth";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { toast } from "sonner";

const LoginForm = () => {
  const [passwordSeen, setPasswordSeen] = useState(false);

  const { mutate, isError, error } = userLogin();


  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handlePasswordSeen = () => {
    setPasswordSeen(!passwordSeen);
  };

  const onSubmit = (data) => {
    console.log(data);
    mutate(data);
  };

  return (
    <div className=" login-form text-center">
      <h3 className=" text-3xl text-white font-medium">Login</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className=" text-white text-4xl  py-8 font-light">
          Logged in to stay in touch
        </h2>

        <div className=" space-y-5">
          <div className=" flex flex-col gap-1">
            <Input
              className="bg-white bg-opacity-25 hover:bg-transparent duration-300    border-transparent hover:border hover:border-white   text-white  placeholder:text-white rounded-full"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && (
              <p className="error-message font-medium">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <div className="bg-white bg-opacity-25 hover:bg-transparent  duration-300 rounded-full   border-transparent hover:border hover:border-white  text-white   flex pr-3">
              <Input
                className=" border-none outline-none bg-transparent placeholder:text-white"
                placeholder="Password"
                type={passwordSeen ? "text" : "password"}
                {...register("password")}
              />
              <button type="button" onClick={handlePasswordSeen}>
                {passwordSeen ? (
                  <FaRegEye size={20} />
                ) : (
                  <FaRegEyeSlash size={20} />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="error-message font-medium">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <button
              className=" bg-mainColor text-white px-8 font-medium text-lg  rounded-full w-full py-2"
              type="submit"
            >
              Sign In
            </button>
          </div>

          <div>
            <p className=" text-white font-semibold">
              Dont have an account ?{" "}
              <Link className="  text-mainColor " to={"/register"}>
                Register now
              </Link>
            </p>
          </div>

          {/* <div className=" pt-2 flex items-center justify-between text-[#fbceb5]">
            <div className="items-top flex space-x-2 ">
              <Checkbox id="terms1" className=" bg-white  border-none" />
              <div className="flex items-center  gap-1.5 leading-none">
                <label
                  htmlFor="terms1"
                  className=" text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember Me
                </label>
              </div>
            </div>
            <div>
              <p className=" text-lg">Forgot Password</p>
            </div>
          </div> */}

          {/* <p className=" text-white text-lg">— Or Sign In With —</p>
          <div className=" flex justify-center">
            <button className="flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-5 py-3 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
                alt=""
                className=" w-5 h-5"
              />
              <span>Continue with Google</span>
            </button>
          </div> */}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
