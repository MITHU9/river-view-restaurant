import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

// Custom hook for editing food
export function useEditFood() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, formData }) => {
      return axios.put(`/api/food/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["foods"] });
    },
    onError: (error) => {
      console.error("Update failed:", error);
    },
  });
}
