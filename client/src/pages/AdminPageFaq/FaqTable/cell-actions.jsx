import { AlertModal } from "@/components/commonComponents/AlertModal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, MoreHorizontal, Trash } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { FaPen } from "react-icons/fa";
import {
  useCreateFaqs,
  useDeleteFaqs,
  useGetFaqs,
  useUpdateFaq,
} from "@/hooks/UseHotelFaqs";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const CellAction = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { isLoading, data: faqData, error } = useGetFaqs();
  const [faqId, setFaqId] = useState(null);
  const { mutateAsync: deleteFaq } = useDeleteFaqs(data._id);
  const { mutate: updateFaq } = useUpdateFaq(faqId);
  const { mutateAsync: createFaq } = useCreateFaqs();


//   const handleDelete = (faqId) => {
//     deleteFaq(faqId);
//   };

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

  const onUpdateSubmit = async (data) => {
    updateFaq(data);
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

  const onConfirm = async () => {
    setLoading(true)
    try {
      await deleteFaq(data._id)
      setOpen(false)
    } catch (error) {
      throw error
    } finally {
      setLoading(false)
    }
  }



  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>

          <DropdownMenuItem
            // onClick={() => navigate(`/dashboard/user/${data.id}`)}
          >
            <Dialog>
              <DialogTrigger onClick={() => handleClick(data?._id)} asChild>
                <button className=" flex gap-2 items-center"><FaPen className="cursor-pointer" size={13} /> Update</button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit faq</DialogTitle>
                  <DialogDescription>
                    Make changes to your faq here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>

                <div>
                  <form
                    onSubmit={handleSubmit(onUpdateSubmit)}
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
                      <Label htmlFor="faqImage" className="text-right">
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
            {/* <Edit className="mr-2 h-4 w-4" /> Update */}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Trash className="mr-2 h-4 w-4" /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
