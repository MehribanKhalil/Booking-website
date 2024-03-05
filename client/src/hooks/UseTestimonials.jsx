
import { deleteTestimonial, getTestimonial, getTestimonialById, updateTestimonial } from "@/services/TestimonialsService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";


//GET TESTIMONIALS
export const useGetTestimonials = () => {
  return useQuery({
    queryKey: ["testimonials"],
    queryFn: getTestimonial,
  });
};

//GET TESTIMONIAL
export const useGetTestimonialsById = (id) => {
  return useQuery({
    queryKey: ["testimonial"],
    queryFn:()=>getTestimonialById(id),
  });
};



//CREATE TESTIMONIAL
export const useCreateTestimonials = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => createFacility(data),
    mutationKey: ["createTestimonial"],
    onSuccess: () => {
      queryClient.invalidateQueries(["testimonials"]);
    },
  });
};



//DELETE TESTIMONIAL
export const useDeleteTestimonial = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (testimonialId) => deleteTestimonial(testimonialId),
    mutationKey: ["deleteTestimonial"],
    onSuccess: () => {
      queryClient.invalidateQueries(["testimonials"]);
    },
  });
};


//UPDATE TESTIMONIAL
export const useUpdateTestimonial = (testimonialId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => updateTestimonial(testimonialId, data),
    mutationKey: ["updateTestimonial"],
    onSuccess: () => {
      queryClient.invalidateQueries(["testimonials"]);
    },
  });
};


