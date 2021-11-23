import axios from "axios";
import Cookies from "universal-cookie";
const cookie = new Cookies();

// getting logged in user info
const profile = cookie.get("loginaccount");

// post categories api call
export const createPostCategory = async (formdata) => {
  const { data } = await axios.post(
    `/postcategory/create/${profile?.user?._id}`,
    formdata
  );
  return data;
};

export const getPostCategories = async () => {
  const { data } = await axios.get("postcategories");
  return data;
};

export const getPostCategoryById = async (categoryId) => {
  const { data } = await axios.get(`/postcategory/${categoryId}`);
  return data;
};

export const updatePostCategory = async (cateData) => {
  const { data } = await axios.put(
    `/postcategory/update/${cateData.categoryId}/${profile?.user?._id}`,
    cateData.formdata
  );
  return data;
};

export const deletePostCategory = async (categoryId) => {
  const { data } = await axios.delete(
    `/postcategory/delete/${categoryId}/${profile?.user?._id}`
  );
  return data;
};

// product categories api call
export const createProductCategory = async (formdata) => {
  const { data } = await axios.post(
    `/productcategory/create/${profile?.user?._id}`,
    formdata
  );
  return data;
};

export const getProductCategories = async () => {
  const { data } = await axios.get("productcategories");
  return data;
};

export const getProductCategoryById = async (categoryId) => {
  const { data } = await axios.get(`/productcategory/${categoryId}`);
  return data;
};

export const updateProductCategory = async (cateData) => {
  const { data } = await axios.put(
    `/productcategory/update/${cateData.categoryId}/${profile?.user?._id}`,
    cateData.formdata
  );
  return data;
};

export const deleteProductCategory = async (categoryId) => {
  const { data } = await axios.delete(
    `/productcategory/delete/${categoryId}/${profile?.user?._id}`
  );
  return data;
};

// product api call
export const createProduct = async (formdata) => {
  const { data } = await axios.post(
    `/product/create/${profile?.user?._id}`,
    formdata
  );
  return data;
};

export const getProducts = async () => {
  const { data } = await axios.get("products");
  return data;
};

export const getProductById = async (productId) => {
  const { data } = await axios.get(`/product/${productId}`);
  return data;
};
export const getProductPictureById = async (productId) => {
  const { data } = await axios.post(`/productpicture`, productId);
  return data;
};

export const updateProduct = async (productData) => {
  const { data } = await axios.put(
    `/product/update/${productData.productId}/${profile?.user?._id}`,
    productData.formdata
  );
  return data;
};

export const deleteProduct = async (productId) => {
  const { data } = await axios.delete(
    `/product/delete/${productId}/${profile?.user?._id}`
  );
  return data;
};

// post api call
export const createPost = async (formdata) => {
  const { data } = await axios.post(
    `/post/create/${profile?.user?._id}`,
    formdata
  );
  return data;
};

export const getPosts = async () => {
  const { data } = await axios.get("posts");
  return data;
};

export const getPostById = async (postId) => {
  const { data } = await axios.get(`/post/withoutcatedetails/${postId}`);
  return data;
};

export const getPostPictureById = async (postId) => {
  const { data } = await axios.post(`/postpicture`, postId);
  return data;
};

export const updatePost = async (postData) => {
  const { data } = await axios.put(
    `/post/update/${postData.postId}/${profile?.user?._id}`,
    postData.formdata
  );
  return data;
};

export const deletePost = async (productId) => {
  const { data } = await axios.delete(
    `/post/delete/${productId}/${profile?.user?._id}`
  );
  return data;
};
