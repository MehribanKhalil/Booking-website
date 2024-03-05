import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { columns } from "./columns";
import { useCreateFaqs, useGetFaqs } from "@/hooks/UseHotelFaqs";
import { Navigate } from "react-router-dom";
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
import { useState } from "react";
import { useForm } from "react-hook-form";

export const FaqTable = ({ data }) => {
    // const {data:faqData, isLoading} = useGetFaqs
    // if(isLoading) return <h1>Loadgin...</h1>
    const { isLoading, data: faqData, error } = useGetFaqs();
    const [faqId, setFaqId] = useState(null);
    const { mutateAsync: createFaq } = useCreateFaqs();
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
    <>
      <div className="flex items-start justify-between mb-4 text-primary">
        <Heading
        
          title={`FAQS (${data?.length})`}
          description="Manage Faqs"
        />

         <div className="add-new-faq px-8 pb-5 cursor-pointer">
        <Dialog>
          <DialogTrigger asChild>
            <span className=" border text-xs md:text-sm flex items-center  border-foreground  rounded-md px-3 py-2 ">
            <Plus className="mr-2 h-4 w-4" /> New FAQ
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
      </div>


       
      </div>
      <Separator />
      <DataTable searchKey="question" columns={columns} data={data} />
    </>
  );
};
