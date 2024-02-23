import {
  createCategory,
  deleteCategory,
  getCatgories,
  updateCategory,
} from "@/services/CategoryService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCatgories,
  });
};

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (categoryId) => deleteCategory(categoryId),
    mutationKey: ["deletecategory"],
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
    },
  });
};

export const useUpdateCategory = (categoryId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => updateCategory(categoryId, data),
    mutationKey: ["updateCategory"],
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
    },
  });
};

export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => createCategory(data),
    mutationKey: ["createCategory"],
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
    },
  });
};
