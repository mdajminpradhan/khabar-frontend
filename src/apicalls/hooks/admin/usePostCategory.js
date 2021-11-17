import { useQuery, useQueryClient, useMutation } from "react-query";
import cogoToast from "cogo-toast";
import {
  createPostCategory,
  getPostCategories,
  getPostCategoryById,
  updatePostCategory,
  deletePostCategory
} from "apicalls/services/admin";

// create post category
export const useCreatePostCategory = () => {
  const queryClient = useQueryClient();

  return useMutation(createPostCategory, {
    onSuccess: () => {
      cogoToast.success("Post category created successfully...", {
        position: "top-right",
      });
      queryClient.invalidateQueries("postcategories");
    },
  });
};

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

export const useUpdatePostCategory = () => {
  const queryClient = useQueryClient();

  return useMutation(updatePostCategory, {
    onSuccess: () => {
      cogoToast.success("Post category updated successfully...", {
        position: "top-right",
      });
      queryClient.invalidateQueries("postcategories");
    },
  });
};

export const useDeletePostCategory = () => {
  const queryClient = useQueryClient();

  return useMutation(deletePostCategory, {
    onSuccess: () => {
      cogoToast.success("Post category deleted successfully...", {
        position: "top-right",
      });
      queryClient.invalidateQueries("postcategories");
    },
  });
};
