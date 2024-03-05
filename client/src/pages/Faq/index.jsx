import SectionTitle from "@/components/commonComponents/SectionTitle";
import React from "react";
import { Helmet } from "react-helmet-async";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageTitle from "@/components/commonComponents/PageTitle";
import { accordion } from "@material-tailwind/react";
import { useGetFaqs } from "@/hooks/UseHotelFaqs";
import Loader from "@/components/commonComponents/Loader";

const Faq = () => {
 
  const { isLoading, data, error } = useGetFaqs();

  console.log(data);

  if (isLoading) {
    return <Loader />;
  }


  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <Helmet>
        <title>Faq</title>
      </Helmet>

      <div className="Faq-page  wrapper section-space  bg-[url('https://jannataresort.com/_nuxt/img/a109df5.png)']">
        <div className="  mt-1  flex flex-col md:flex-row bg-no-repeat  bg-cover bg-center p-10 gap-10 rounded-xl ">
          <div className=" overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1562790351-d273a961e0e9?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className=" w-[900px]  rounded-xl hover:scale-105 cursor-pointer duration-500"
              alt=""
            />
          </div>


         

          <Accordion type="single" collapsible className="w-full  ">
            <PageTitle title="Frequently asked questions" />


           <div className="h-[500px] overflow-y-auto">
           {data.map((faq) => (
              <AccordionItem value={faq._id} className="  px-6 my-6">
                <AccordionTrigger className=" text-lg ">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className=" text-lg text-gray-500 ">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
           </div>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Faq;
