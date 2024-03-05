import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Button from "@/components/commonComponents/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {contactValidationSchema} from "@/utils/validationSchema";
import { toast } from 'sonner';




const ContactForm = () => {

  const form = useRef();

  const sendEmail = () => {
    // e.preventDefault();

    emailjs
      .sendForm('service_3sjfxgs', 'template_ck2hers', form.current, {
        publicKey: '7W2nOQet2gH7_vnUZ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


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
      message: "",
    },
  });


  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    sendEmail()
    toast.success("Message sent successfully")
    reset();
  };

  return (
    <div className="contact-form  w-full shadow-[0_8px_30px_rgb(0,0,0,0.12)]   bg-white max-w-[500px] mx-auto text-center pt-12 pb-5">
      <p className=" text-[14px]  font-semibold text-neutral-800">CONTACT FORM</p>
      <h2 className="  text-mainColor text-2xl pt-2 ">Let's Start A Conversation</h2>

      <form ref={form}  onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4  py-7 px-3 md:px-16">
          

          <div className=" w-full">
              <Input className='input-element' placeholder="First name" {...register("firstName")} />
              {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}
            </div>
            <div className=" w-full">
              <Input className='input-element'  placeholder="Last name" {...register("lastName")} />
              {errors.lastName && <p className="error-message">{errors.lastName.message}</p>}
            </div>

           
            <div className="w-full">
              <Input className='input-element' 
                placeholder="Email"
                {...register("email")}
              />
              {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>

          <div>
            <Textarea placeholder="Message" {...register("message")} />
            {errors.message && <p className="error-message">{errors.message.message}</p>}
          </div>

          <div className="">
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
