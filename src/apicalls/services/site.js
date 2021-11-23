import axios from "axios";

// createaccount api call
export const createAccount = async (formdata) => {
  const { data } = await axios.post("/createaccount", formdata);
  return data;
};

// login api call
export const loginAccount = async (formdata) => {
  const { data } = await axios.post("/loginaccount", formdata);
  return data;
};

// post api call
export const getPosts = async () => {
  const { data } = await axios.get("posts");
  return data;
};

export const getPostById = async (postId) => {
  const { data } = await axios.get(`/post/${postId}`);
  return data;
};

// post category api call

export const getPostCategories = async () => {
  const { data } = await axios.get("postcategories");
  return data;
};

export const getPostCategoryById = async (categoryId) => {
  const { data } = await axios.get(`/postcategory/${categoryId}`);
  return data;
};

// sidebar api calls

export const getSidebarCategories = async (api) => {
  if (api) {
    const { data } = await axios.get(api);
    return data;
  }
};
