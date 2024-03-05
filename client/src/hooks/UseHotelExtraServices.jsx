import { createService, deleteService, getServices, updateService } from "@/services/HotelExtraServices";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";


//GET SERVICES
export const useGetServices = () => {
  return useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });
};

//CREATE SERVICE
export const useCreateService = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => createService(data),
    mutationKey: ["createService"],
    onSuccess: () => {
      queryClient.invalidateQueries(["services"]);
    },
  });
};



// DELETE SERVICE
export const useDeleteService = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (serviceId) => deleteService(serviceId),
    mutationKey: ["deleteService"],
    onSuccess: () => {
      queryClient.invalidateQueries(["services"]);
    },
  });
};


//UPDATE SERVICE
export const useUpdateService = (serviceId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => updateService(serviceId, data),
    mutationKey: ["updateService"],
    onSuccess: () => {
      queryClient.invalidateQueries(["services"]);
    },
  });
};


