import React from "react";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Checkbox } from "@/components/ui/checkbox";
import { loginValidationSchema } from "@/utils/validationSchema";
import { userLogin } from "@/hooks/UseAuth";

const LoginForm = () => {
  const { mutate } = userLogin(); 

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

  const onSubmit = (data) =>{
    console.log(data);
    mutate(data);
  }

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
              className="input-transparent placeholder:text-white rounded-3xl"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && <p className="error-message font-medium" >{errors.email.message}</p>}

           
          </div>

          <div className="flex flex-col gap-1">
          <Input
              className="input-transparent placeholder:text-white rounded-3xl"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && <p className="error-message font-medium">{errors.password.message}</p>}
          </div>

          <div>
            <button
              className=" border bg-[#fbceb5] rounded-3xl text-xl w-full py-2"
              type="submit"
            >
              Sign In
            </button>
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
