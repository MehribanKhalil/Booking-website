import React from "react";
import { Input } from "@/components/ui/input";
import Button from "@/components/commonComponents/Button";
import { useForm } from "react-hook-form";
import {accountValidationSchema} from "@/utils/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";

const AccountSetting = ({className}) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting, touchedFields, dirtyFields },
  } = useForm({
    resolver: yupResolver(accountValidationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
    },
  });

  console.log(dirtyFields);

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    reset();
  };
  return (
    <div className={`account-setting border border-gray-100 rounded-lg p-5 ${className}`}>
      <div className="contact-form">
        <h3 className="text-mainColor  text-2xl font-medium ">
          Account Settings
        </h3>
        <p className=" text-gray-500  pt-1">Update your account</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" space-y-7 pt-10">
            <div className=" flex flex-col lg:flex-row gap-6">
              <div className="  w-full space-y-2">
              <label htmlFor="firstName" className=" text-gray-600 font-medium">First Name</label>
                <Input
                  className="input-element"
                  {...register("firstName")}
                />
                {errors.firstName && <p>{errors.firstName.message}</p>}
              </div>
              <div className="  w-full space-y-2">
              <label htmlFor="lastName" className=" text-gray-600 font-medium">Last Name</label>
                <Input
                  className="input-element"
                  {...register("lastName")}
                />
                {errors.lastName && <p>{errors.lastName.message}</p>}
              </div>
            </div>

            <div className=" flex flex-col lg:flex-row gap-6">
              <div className=" w-full space-y-2">
              <label htmlFor="email" className=" text-gray-600 font-medium">Email Address </label>
                
                <Input
                  className="input-element"
                  {...register("email")}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>
              <div className=" w-full space-y-2">
              <label htmlFor="mobileNumber" className=" text-gray-600 font-medium">Mobile Number </label>
                <Input
                  className="input-element"
                  {...register("mobileNumber")}
                />
                {errors.mobileNumber && <p>{errors.mobileNumber.message}</p>}
              </div>

              
            </div>

            <div className=" flex flex-col lg:flex-row gap-6">
              <div className=" w-full space-y-2">
              <label htmlFor="userName" className=" text-gray-600 font-medium">User Name </label>
                <Input
                  className="input-element"
                  {...register("userName")}
                />
                {errors.userName && <p>{errors.userName.message}</p>}
              </div>
              <div className=" w-full space-y-2">
              <label htmlFor="mobileNumber" className=" text-gray-600 font-medium">Mobile Number </label>
                <Input
                  className="input-element"
                  {...register("mobileNumber")}
                />
                {errors.mobileNumber && <p>{errors.mobileNumber.message}</p>}
              </div>

              
            </div>

            <div>
              <Button type="submit">
                {isSubmitting ? "Loading..." : "Send message"}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountSetting;
