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

const Faq = () => {
  const faqQuestions = [
    {
      id: "1",
      triggerText:
        "It is along established fact that a reader will be distracted by",
      contentText:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      id: "2",
      triggerText:
        "It is along established fact that a reader will be distracted by",
      contentText:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      id: "3",
      triggerText:
        "It is along established fact that a reader will be distracted by",
      contentText:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      id: "4",
      triggerText:
        "It is along established fact that a reader will be distracted by",
      contentText:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Faq</title>
      </Helmet>

      <div className="Faq-page  wrapper section-space">

        <div className=" mt-1  flex flex-col md:flex-row bg-no-repeat  bg-cover bg-center p-10 gap-10 rounded-xl ">

        <div className="">
            <img
              src="https://images.unsplash.com/photo-1542931287-023b922fa89b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRva3lvfGVufDB8fDB8fHww"
              className=" w-[900px]"
              alt=""
            />
          </div>

          <Accordion type="single" collapsible className="w-full ">
        <PageTitle title="Frequently asked questions" />

            {faqQuestions.map((item) => (
              <AccordionItem
                value={item.id}
                className="  px-6 my-6"
              >
                <AccordionTrigger className=" text-lg ">
                  {item.triggerText}
                </AccordionTrigger>
                <AccordionContent className=" text-lg text-gray-500 ">
                  {item.contentText}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

         
        </div>
      </div>
    </>
  );
};

export default Faq;
