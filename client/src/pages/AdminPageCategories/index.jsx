import Loader from "@/components/commonComponents/Loader";
import {
  useCreateCategory,
  useDeleteCategory,
  useGetCategories,
  useUpdateCategory,
} from "@/hooks/UseCategories";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";
import PageTitle from "@/components/commonComponents/PageTitle";
import { FaPen } from "react-icons/fa";
import CategoryUpdateModal from "@/components/AdminPageComponents/CategoryUpdateModal";
import {
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidationSchema } from "@/utils/validationSchema";
import { useForm, Controller } from "react-hook-form";

const AdminPageCategories = () => {
  const { isLoading, data, error } = useGetCategories();
  const [image, setImage] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const { mutate: deleteCategory } = useDeleteCategory();
  const { mutate: updateCategory } = useUpdateCategory(categoryId);
  const { mutate: createCategory } = useCreateCategory();
  const handleDelete = (categoryId) => {
    deleteCategory(categoryId);
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      categoryName: "",
      categoryImage: null,
    },
  });



  const onCreateSubmit = async (data) => {
    const formData = new FormData();
    formData.append("categoryName", data.categoryName);
    formData.append("categoryImage", data.categoryImage);
    createCategory(formData);
    console.log(data);

  };
  const onUpdateSubmit = async (data) => {
    const formData = new FormData();
    formData.append("categoryName", data.categoryName);
    formData.append("categoryImage", data.categoryImage);
    updateCategory(formData);
    // console.log(data);
  };

  const handleClick = (id) => {
    setCategoryId(id);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <section className=' py-10'>
      <Helmet>
        <title>Admin Page Categories</title>
      </Helmet>

      {/* <div className="pt-16 px-10 flex justify-center">
        <PageTitle title="Categories" />
      </div> */}

      <div className="add-new-category px-8 pb-5 cursor-pointer">
        <Dialog>
          <DialogTrigger asChild>
            <span className=" border  border-mainColor  rounded-md px-3 py-1 ">
              New Category
            </span>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create Category</DialogTitle>
              <DialogDescription>
                Make new category here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>

            <div>
              <form
                onSubmit={handleSubmit(onCreateSubmit)}
                className="grid gap-4 py-4"
              >
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="categoryName" className="text-right">
                    Title
                  </Label>
                  <div className=" flex flex-col gap-1">
                    <Input
                      name="categoryName"
                      className="input-transparent min-w-[200px] text-black"
                      {...register("categoryName")}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="categoryImage" className="text-right">
                    Image
                  </Label>
                  <div className=" flex flex-col gap-1">
                    <Controller
                      control={control}
                      name={"categoryImage"}
                      render={({ field: { value, onChange, ...field } }) => {
                        return (
                          <Input
                            {...field}
                            value={value?.fileName}
                            onChange={(event) => {
                              onChange(event.target.files[0]);
                            }}
                            className="input-transparent min-w-[200px] text-black"
                            type="file"
                            id="picture"
                          />
                        );
                      }}
                    />
                  </div>
                </div>
                <DialogFooter className='flex gap-1'>
                    
                  <button
                    className=" border border-mainColor px-3 py-1 rounded-md"
                    type="submit"
                  >
                    Save changes
                  </button>

                  <DialogClose asChild>
                <button  className="border border-mainColor px-3 py-1 rounded-md">
                  Close
                </button>
              </DialogClose>
                </DialogFooter>
              </form>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col   pr-10 pb-16 ">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left">
                <thead className=" bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                  <tr>
                    <th scope="col" className=" px-6 py-4">
                      Image
                    </th>

                    <th scope="col" className=" px-6 py-4">
                      Title
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                {data?.map((category) => (
                  <tbody key={category._id}>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-1 py-4 font-medium">
                        <img
                          src={category.categoryImage}
                          className=" w-[120px] h-[120px] object-cover"
                          alt=""
                        />
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        <NavLink>{category.categoryName}</NavLink>
                      </td>

                      <td className="whitespace-nowrap px-6 py-4">
                        <div className=" space-x-3 flex items-center gap-3">
                          <button className=" p-2">
                            <Dialog>
                              <DialogTrigger
                                onClick={() => handleClick(category?._id)}
                                asChild
                              >
                                <FaPen className="cursor-pointer" size={15} />
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                  <DialogTitle>Edit category</DialogTitle>
                                  <DialogDescription>
                                    Make changes to your category here. Click
                                    save when you're done.
                                  </DialogDescription>
                                </DialogHeader>

                                <div>
                                  <form
                                    onSubmit={handleSubmit(onUpdateSubmit)}
                                    className="grid gap-4 py-4"
                                  >
                                    <div className="grid grid-cols-4 items-center gap-4">
                                      <Label
                                        htmlFor="categoryName"
                                        className="text-right"
                                      >
                                        Title
                                      </Label>

                                      <div className=" flex flex-col gap-1">
                                        <Input
                                          name="categoryName"
                                          className="input-transparent min-w-[200px] text-black"
                                          {...register("categoryName")}
                                        />
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                      <Label
                                        htmlFor="categoryImage"
                                        className="text-right"
                                      >
                                        Image
                                      </Label>
                                      <div className=" flex flex-col gap-1">
                                        <Controller
                                          control={control}
                                          name={"categoryImage"}
                                          render={({
                                            field: {
                                              value,
                                              onChange,
                                              ...field
                                            },
                                          }) => {
                                            return (
                                              <Input
                                                {...field}
                                                value={value?.fileName}
                                                onChange={(event) => {
                                                  onChange(
                                                    event.target.files[0]
                                                  );
                                                }}
                                                className="input-transparent min-w-[200px] text-black"
                                                type="file"
                                                id="picture"
                                              />
                                            );
                                          }}
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
                            onClick={() => handleDelete(category._id)}
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
      </div>

      {/* <CategoryUpdateModal /> */}
    </section>
  );
};

export default AdminPageCategories;
