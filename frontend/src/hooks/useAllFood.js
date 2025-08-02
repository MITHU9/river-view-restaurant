import { useQuery } from "@tanstack/react-query";
import { getAllFoodItems } from "../api/foodApi";

export const useFoodItems = (category = "all", page = 1, limit = 10) => {
  return useQuery({
    queryKey: ["foods", category, page, limit],
    queryFn: () => getAllFoodItems(category, page, limit),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
