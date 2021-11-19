import { useQuery, useQueryClient, useMutation } from "react-query";
import cogoToast from "cogo-toast";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "apicalls/services/admin";

// create product product
export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation(createProduct, {
    onSuccess: () => {
      cogoToast.success("Product product created successfully...", {
        position: "top-right",
      });
      queryClient.invalidateQueries("products");
    },
  });
};

export const useGetProducts = () => {
  return useQuery("products", getProducts, {
    refetchOnWindowFocus: false,
  });
};

export const useGetProductById = (productId) => {
  return useQuery(["productId", productId], () => getProductById(productId));
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation(updateProduct, {
    onSuccess: () => {
      cogoToast.success("Product product updated successfully...", {
        position: "top-right",
      });
      queryClient.invalidateQueries("products");
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteProduct, {
    onSuccess: () => {
      cogoToast.success("Product product deleted successfully...", {
        position: "top-right",
      });
      queryClient.invalidateQueries("products");
    },
  });
};
