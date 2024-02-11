import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Button from "@/components/commonComponents/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {contactValidationSchema} from "@/utils/validationSchema";




const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting, touchedFields, dirtyFields },
  } = useForm({
    resolver: yupResolver(contactValidationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      message: "",
    },
  });

  console.log(dirtyFields);

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    reset();
  };

  // console.log(watch("example"));

  return (
    <div className="contact-form">
      <h3 className=" text-2xl py-4 font-semibold text-neutral-800">Leave us a message</h3>
      <p className=" text-gray-500 text-lg">
        Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum.
        There are many variations of passages of Lorem Ipsum available but the
        majority.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" space-y-7 pt-10">
          <div className=" flex flex-col lg:flex-row gap-6">
            <div className=" w-full">
              <Input className='input-element' placeholder="First name*" {...register("firstName")} />
              {errors.firstName && <p>{errors.firstName.message}</p>}
            </div>
            <div className=" w-full">
              <Input className='input-element'  placeholder="Last name*" {...register("lastName")} />
              {errors.lastName && <p>{errors.lastName.message}</p>}
            </div>
          </div>

          <div className=" flex flex-col lg:flex-row gap-6">
            <div className="w-full">
              <Input className='input-element' 
                placeholder="Email address (Optional)"
                {...register("email")}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className="w-full">
              <Input className='input-element' 
                placeholder="Mobile number*"
                {...register("mobileNumber")}
              />
              {errors.mobileNumber && <p>{errors.mobileNumber.message}</p>}
            </div>
          </div>

          <div>
            <Textarea placeholder="Message" {...register("message")} />
            {errors.message && <p>{errors.message.message}</p>}
          </div>

          <div>
            <Button type="submit">
              {isSubmitting ? "Loading..." : "Send message"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
