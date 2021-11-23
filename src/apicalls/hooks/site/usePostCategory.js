import { useQuery } from "react-query";
import {
  getPostCategories,
  getPostCategoryById,
} from "apicalls/services/admin";

export const useGetPostCategories = () => {
  return useQuery("postcategories", getPostCategories, {
    refetchOnWindowFocus: false,
  });
};

export const useGetPostCategoryById = (CategoryId) => {
  return useQuery(["postCategoryId", CategoryId], () =>
    getPostCategoryById(CategoryId)
  );
};
