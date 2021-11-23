import { useQuery } from "react-query";
import {
  getProducts,
  getProductById,
} from "apicalls/services/admin";


export const useGetProducts = () => {
  return useQuery("products", getProducts, {
    refetchOnWindowFocus: false,
  });
};

export const useGetProductById = (productId) => {
  return useQuery(["productId", productId], () => getProductById(productId));
};