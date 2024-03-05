import React from "react";
import { Input } from "@/components/ui/input";
import Button from "@/components/commonComponents/Button";
import { useForm } from "react-hook-form";
import { changePasswordValidation } from "@/utils/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useChangePassword, useGetMe } from "@/hooks/UserHooks";

const ManagePassowrd = ({className}) => {
    const { data, isLoading, error } = useGetMe();
    console.log("profile get me account", data);
    const {
     register, reset, handleSubmit, formState: { errors },
    } = useForm({
      resolver: yupResolver(changePasswordValidation),
      defaultValues: {
        currentPassword: '',
        newPassword: '',
      },
    });

    const { mutate } = useChangePassword()


    const onSubmit = (data) =>{
        console.log(data);
        mutate(data, {
            onSuccess: () => {
              reset()
            }
          })
      }

  return (
    <div
      className={`account-setting border border-gray-300 rounded-lg p-5 ${className}`}
    >
      <div className="contact-form">
        <h3 className="text-mainColor  text-2xl font-medium ">
         Password Settings
        </h3>
        <p className=" text-gray-500  pt-1">Change your password</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" space-y-7 pt-7">
              <div className="  w-full space-y-2">
                <label
                  htmlFor="firstName"
                  className=" text-gray-600 font-medium"
                >
                  Current Password
                </label>
                <Input
                  className="input-element text-mainColor font-medium border-mainColor"
                  {...register("currentPassword")}
                  id='currentPassword'
                  type='password'
                />
                {errors.currentPassword && <p className="error-message">{errors.currentPassword.message}</p>}
              </div>
              <div className="  w-full space-y-2">
                <label
                  htmlFor="lastName"
                  className=" text-gray-600 font-medium"
                >
                New Password
                </label>
                <Input
                  className="input-element text-mainColor font-medium border-mainColor"
                  {...register("newPassword")}
                  id='newPassword'
                  type='password'
                />
                {errors.newPassword && <p className="error-message">{errors.newPassword.message}</p>}
              </div>

            <div className="">
              <Button type='submit'>Save password</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ManagePassowrd