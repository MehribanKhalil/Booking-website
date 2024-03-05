import { createFacility, deleteFacility, getFAcilityById, getFacilites, updateFacility } from "@/services/FacilitesService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";


//GET FACILITIES
export const useGetFacilities = () => {
  return useQuery({
    queryKey: ["facilities"],
    queryFn: getFacilites,
  });
};

//GET FACILITIES
export const useGetFacilityById = (id) => {
  return useQuery({
    queryKey: ["facility"],
    queryFn:()=>getFAcilityById(id),
  });
};



//CREATE FACILITY
export const useCreateFacility = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => createFacility(data),
    mutationKey: ["createFacility"],
    onSuccess: () => {
      queryClient.invalidateQueries(["facilities"]);
    },
  });
};



//DELETE FACILITY
export const useDeleteFacility = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (facilityId) => deleteFacility(facilityId),
    mutationKey: ["deleteFacility"],
    onSuccess: () => {
      queryClient.invalidateQueries(["facilities"]);
    },
  });
};


//UPDATE FACILITY
export const useUpdateFacility = (facilityId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => updateFacility(facilityId, data),
    mutationKey: ["updateFacility"],
    onSuccess: () => {
      queryClient.invalidateQueries(["facilities"]);
    },
  });
};


