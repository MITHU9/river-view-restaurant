import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../api/foodApi";

export function useAllCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
}
