import { useQuery, useQueryClient, useMutation } from "react-query";
import cogoToast from "cogo-toast";
import {
  createProductCategory,
  getProductCategories,
  getProductCategoryById,
  updateProductCategory,
  deleteProductCategory
} from "apicalls/services/admin";

// create product category
export const useCreateProductCategory = () => {
  const queryClient = useQueryClient();

  return useMutation(createProductCategory, {
    onSuccess: () => {
      cogoToast.success("Product category created successfully...", {
        position: "top-right",
      });
      queryClient.invalidateQueries("productcategories");
    },
  });
};

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

export const useUpdateProductCategory = () => {
  const queryClient = useQueryClient();

  return useMutation(updateProductCategory, {
    onSuccess: () => {
      cogoToast.success("Product category updated successfully...", {
        position: "top-right",
      });
      queryClient.invalidateQueries("productcategories");
    },
  });
};

export const useDeleteProductCategory = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteProductCategory, {
    onSuccess: () => {
      cogoToast.success("Product category deleted successfully...", {
        position: "top-right",
      });
      queryClient.invalidateQueries("productcategories");
    },
  });
};
