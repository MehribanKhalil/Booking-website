import Loader from "@/components/commonComponents/Loader";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { IoMdTrash } from "react-icons/io";
import PageTitle from "@/components/commonComponents/PageTitle";
import { FaPen } from "react-icons/fa";
import {
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import {
  useCreateFaqs,
  useDeleteFaqs,
  useGetFaqs,
  useUpdateFaq,
} from "@/hooks/UseHotelFaqs";
import { createFaq } from "@/services/FaqService";
import { FaqTable } from "./FaqTable/datatable";

const AdminPageFaq = () => {
  const { isLoading, data: faqData, error } = useGetFaqs();
  const [faqId, setFaqId] = useState(null);
  const { mutate: deleteFaq } = useDeleteFaqs();
  const { mutate: updateFaq } = useUpdateFaq(faqId);
  const { mutateAsync: createFaq } = useCreateFaqs();
  const handleDelete = (faqId) => {
    deleteFaq(faqId);
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      question: "",
      answer: "",
    },
  });

  const onCreateSubmit = async (data) => {
    await createFaq(data);
  };

  const onUpdateSubmit = async (data) => {
    const formData = new FormData();
    formData.append("question", data.question);
    formData.append("answer", data.answer);
    updateFaq(formData);
  };

  const handleClick = (id) => {
    setFaqId(id);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <section className=" py-16 px-4">
      <Helmet>
        <title>FAQ</title>
      </Helmet>

      {/* <div className="pt-16 px-10 flex justify-center">
        <PageTitle title="FAQ" />
      </div> */}
      {/* <div className="add-new-faq px-8 pb-5 cursor-pointer">
        <Dialog>
          <DialogTrigger asChild>
            <span className=" border  border-mainColor  rounded-md px-3 py-1 ">
              New FAQ
            </span>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create FAQ</DialogTitle>
              <DialogDescription>
                Make new FAQ here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>

            <div>
              <form
                onSubmit={handleSubmit(onCreateSubmit)}
                className="grid gap-4 py-4"
              >
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="question" className="text-right">
                    Question
                  </Label>
                  <div className=" flex flex-col gap-1">
                    <Input
                      name="question"
                      className="input-transparent min-w-[200px] text-black"
                      {...register("question")}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="answer" className="text-right">
                    Answer
                  </Label>
                  <div className=" flex flex-col gap-1">
                    <Input
                      name="answer"
                      className="input-transparent min-w-[200px] text-black"
                      {...register("answer")}
                    />
                  </div>
                </div>
                <DialogFooter className="flex gap-1">
                  <button
                    className=" border border-mainColor px-3 py-1 rounded-md"
                    type="submit"
                  >
                    Save
                  </button>

                  <DialogClose asChild>
                    <button className="border border-mainColor px-3 py-1 rounded-md">
                      Close
                    </button>
                  </DialogClose>
                </DialogFooter>
              </form>
            </div>
          </DialogContent>
        </Dialog>
      </div> */}

      {/* <div className="flex flex-col   pr-10 pb-16 ">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left">
                <thead className=" bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                  <tr>
                    <th scope="col" className=" px-6 py-4">
                      Question
                    </th>

                    <th scope="col" className=" px-6 py-4">
                      Answer
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                {data?.map((faq) => (
                  <tbody key={faq._id}>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-5 py-4 font-medium ">
                        {faq.question}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium  ">
                        <p className="">{faq.answer}</p>
                      </td>

                      <td className="whitespace-nowrap px-6 py-4">
                        <div className=" space-x-3 flex items-center gap-3">
                          <button className=" p-2">
                            <Dialog>
                              <DialogTrigger
                                onClick={() => handleClick(faq?._id)}
                                asChild
                              >
                                <FaPen className="cursor-pointer" size={15} />
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                  <DialogTitle>Edit faq</DialogTitle>
                                  <DialogDescription>
                                    Make changes to your faq here. Click save
                                    when you're done.
                                  </DialogDescription>
                                </DialogHeader>

                                <div>
                                  <form
                                    onSubmit={handleSubmit(onUpdateSubmit)}
                                    className="grid gap-4 py-4"
                                  >
                                    <div className="grid grid-cols-4 items-center gap-4">
                                      <Label
                                        htmlFor="question"
                                        className="text-right"
                                      >
                                        Question
                                      </Label>

                                      <div className=" flex flex-col gap-1">
                                        <Input
                                          name="question"
                                          className="input-transparent min-w-[200px] text-black"
                                          {...register("question")}
                                        />
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                      <Label
                                        htmlFor="faqImage"
                                        className="text-right"
                                      >
                                        Answer
                                      </Label>
                                      <div className=" flex flex-col gap-1">
                                        <Input
                                          name="answer"
                                          className="input-transparent min-w-[200px] text-black"
                                          {...register("answer")}
                                        />
                                      </div>
                                    </div>
                                    <DialogFooter>
                                      <button
                                        className=" border border-gray-500 px-3 py-1 rounded-md"
                                        type="submit"
                                      >
                                        Save changes
                                      </button>
                                    </DialogFooter>
                                  </form>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </button>
                          <button
                            className="p-2"
                            onClick={() => handleDelete(faq._id)}
                          >
                            <IoMdTrash size={20} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div> */}
      <FaqTable data={faqData} />
    </section>
  );
};

export default AdminPageFaq;
