import { useQuery } from "react-query";
import {
  getProductCategories,
  getProductCategoryById,
} from "apicalls/services/admin";

export const useGetProductCategories = () => {
  return useQuery("productcategories", getProductCategories, {
    refetchOnWindowFocus: false,
  });
};

export const useGetProductCategoryById = (CategoryId) => {
  return useQuery(["productCategoryId", CategoryId], () =>
    getProductCategoryById(CategoryId)
  );
};
