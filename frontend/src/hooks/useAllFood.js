import { useQuery } from "@tanstack/react-query";
import { getAllFoodItems } from "../api/foodApi";

export const useFoodItems = (category = "all") => {
  return useQuery({
    queryKey: ["foods", category],
    queryFn: () => getAllFoodItems(category),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
