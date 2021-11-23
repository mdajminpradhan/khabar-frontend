import { useQuery } from "react-query";
import {
  getSidebarCategories,
} from "apicalls/services/site";

export const useGetSidebarCategories = (name, api) => {
  return useQuery(name, () => getSidebarCategories(api), {
    refetchOnWindowFocus: false,
  });
};
