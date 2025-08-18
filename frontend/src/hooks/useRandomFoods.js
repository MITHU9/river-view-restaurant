import { useQuery } from "@tanstack/react-query";
import { getRandomFoods } from "../api/foodApi";

export const useRandomFoods = (limit = 6) => {
  return useQuery({
    queryKey: ["randomFoods", limit],
    queryFn: () => getRandomFoods(limit),
  });
};
