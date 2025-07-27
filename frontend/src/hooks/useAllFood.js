import { useQuery } from "@tanstack/react-query";
import { getAllFoodItems } from "../api/foodApi";

export function useAllFood() {
  return useQuery({
    queryKey: ["foods"],
    queryFn: getAllFoodItems,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
}
