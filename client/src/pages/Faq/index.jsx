import SectionTitle from "@/components/commonComponents/SectionTitle";
import React from "react";
import { Helmet } from "react-helmet-async";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import PageTitle from "@/components/commonComponents/PageTitle";

const Faq = () => {
  return (
    <>
      <Helmet>
        <title>Faq</title>
      </Helmet>

      <div className="Faq-page  wrapper section-space">
        <PageTitle
          title='Frequently asked questions'
        />

        <div className="  ">
          <Accordion type="single" collapsible className="w-full ">
           
            <AccordionItem
              value="item-1"
              className=" shadow-[0_3px_10px_rgb(0,0,0,0.2)]  px-6 my-6"
            >
              <AccordionTrigger className=" text-lg ">
                It is along established fact that a reader will be distracted by
              </AccordionTrigger>
              <AccordionContent className=" text-lg text-gray-500 ">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className=" shadow-[0_3px_10px_rgb(0,0,0,0.2)]  px-6 my-6"
            >
              <AccordionTrigger className=" text-lg ">
                It is along established fact that a reader will be distracted by
              </AccordionTrigger>
              <AccordionContent className=" text-lg text-gray-500 ">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className=" shadow-[0_3px_10px_rgb(0,0,0,0.2)]  px-6 my-6"
            >
              <AccordionTrigger className=" text-lg ">
                It is along established fact that a reader will be distracted by
              </AccordionTrigger>
              <AccordionContent className=" text-lg text-gray-500 ">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className=" shadow-[0_3px_10px_rgb(0,0,0,0.2)]  px-6 my-6"
            >
              <AccordionTrigger className=" text-lg ">
                It is along established fact that a reader will be distracted by
              </AccordionTrigger>
              <AccordionContent className=" text-lg text-gray-500 ">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </AccordionContent>
            </AccordionItem>

           
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Faq;
