import { useQuery } from "react-query";
import { getPosts, getPostById } from "apicalls/services/site";

export const useGetPosts = () => {
  return useQuery("posts", getPosts, {
    refetchOnWindowFocus: false,
  });
};

export const useGetPostById = (postId) => {
  return useQuery(["postId", postId], () => getPostById(postId));
};
