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
