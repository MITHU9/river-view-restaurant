import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addFoodItem } from "../api/foodApi";

export function useAddFood() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addFoodItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["foods"] });
    },
  });
}
