import { createFaq, deleteFaq, getFaqs, updateFaq } from "@/services/FaqService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";


//GET FAQS
export const useGetFaqs = () => {
  return useQuery({
    queryKey: ["faqs"],
    queryFn: getFaqs,
  });
};


//CREATE FAQ
export const useCreateFaqs = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => createFaq(data),
    mutationKey: ["createFaq"],
    onSuccess: () => {
      queryClient.invalidateQueries(["faqs"]);
    },
  });
};



//DELETE FAQ
export const useDeleteFaqs = (faqId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteFaq(faqId),
    mutationKey: ["deleteFaq",faqId],
    onSuccess: () => {
      queryClient.invalidateQueries(["faqs"]);
    },
  });
};


//UPDATE FAQ
export const useUpdateFaq = (faqId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => updateFaq(faqId, data),
    mutationKey: ["updateFaq"],
    onSuccess: () => {
      queryClient.invalidateQueries(["faqs"]);
    },
  });
};


