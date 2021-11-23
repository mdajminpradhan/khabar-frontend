import { useQuery, useQueryClient, useMutation } from "react-query";
import cogoToast from "cogo-toast";
import {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
} from "apicalls/services/admin";

// create post
export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation(createPost, {
    onSuccess: () => {
      cogoToast.success("Post created successfully...", {
        position: "top-right",
      });
      queryClient.invalidateQueries("posts");
    },
  });
};

export const useGetPosts = () => {
  return useQuery("posts", getPosts, {
    refetchOnWindowFocus: false,
  });
};

export const useGetPostById = (postId) => {
  return useQuery(["postId", postId], () => getPostById(postId));
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation(updatePost, {
    onSuccess: () => {
      cogoToast.success("Post updated successfully...", {
        position: "top-right",
      });
      queryClient.invalidateQueries("posts");
    },
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation(deletePost, {
    onSuccess: () => {
      cogoToast.success("Post deleted successfully...", {
        position: "top-right",
      });
      queryClient.invalidateQueries("posts");
    },
  });
};
