import { useQuery, useQueryClient, useMutation } from "react-query";
import cogoToast from "cogo-toast";
import { createPostCategory } from "apicalls/services/admin";
import { getCategories } from "apicalls/services/admin";

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
  return useQuery("postcategories", getCategories, {
    refetchOnWindowFocus: false,
  });
};
