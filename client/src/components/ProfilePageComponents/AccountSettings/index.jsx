import React from "react";
import { Input } from "@/components/ui/input";
import Button from "@/components/commonComponents/Button";
import { useForm } from "react-hook-form";
import { accountValidationSchema } from "@/utils/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useGetMe } from "@/hooks/UserHooks";
import Loader from "@/components/commonComponents/Loader";
import { useUpdateProfile } from "@/hooks/UseUpdateProfile";

const AccountSetting = ({ className }) => {
  const { data:currentUser, isLoading, error } = useGetMe();
  const { mutate } = useUpdateProfile();

  if (isLoading) {
    return <Loader />;
  }
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(accountValidationSchema),
    defaultValues: {
      firstName: currentUser?.firstName,
      lastName: currentUser?.lastName,
      email: currentUser?.email,
      userName: currentUser?.userName,
    },
  });



  const submit = (data) => {
    console.log("salam", data);

    mutate({
      id: currentUser?._id,
      data: data,
    });
  };

  return (
    <div
      className={`account-setting border border-gray-300 rounded-lg p-5 ${className}`}
    >
      <div className="contact-form">
        <h3 className="text-mainColor  text-2xl font-medium ">
          Account Settings
        </h3>
        <p className=" text-gray-500  pt-1">Update your account</p>

        <form onSubmit={handleSubmit(submit)}>
          <div className=" space-y-7 pt-7">
            {/* <div className=" flex flex-col lg:flex-row gap-6"> */}
            <div className="  w-full space-y-2">
              <label htmlFor="firstName" className=" text-gray-600 font-medium">
                First Name
              </label>
              <Input
                id="firstName"
                className="input-element text-mainColor font-medium border-mainColor"
                {...register("firstName")}
              />
              {errors.firstName && <p>{errors.firstName.message}</p>}
            </div>
            <div className="  w-full space-y-2">
              <label htmlFor="lastName" className=" text-gray-600 font-medium">
                Last Name
              </label>
              <Input
                id="lastName"
                className="input-element text-mainColor font-medium border-mainColor"
                {...register("lastName")}
              />
              {errors.lastName && <p>{errors.lastName.message}</p>}
            </div>
            {/* </div> */}

            {/* <div className=" flex flex-col lg:flex-row gap-6"> */}
            <div className=" w-full space-y-2">
              <label htmlFor="email" className=" text-gray-600 font-medium">
                Email Address{" "}
              </label>

              <Input
                id="email"
                className="input-element text-mainColor font-medium border-mainColor"
                {...register("email")}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div className=" w-full space-y-2">
              <label htmlFor="userName" className=" text-gray-600 font-medium">
                User Name{" "}
              </label>
              <Input
                id="userName"
                className="input-element text-mainColor font-medium border-mainColor"
                {...register("userName")}
              />
              {errors.userName && <p>{errors.userName.message}</p>}
            </div>
            {/* </div> */}
            <Button type="submit">submit</Button>
            {/* <button type="submit">Update Profile</button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountSetting;
