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

export const getCategories = async () => {
  const { data } = await axios.get('postcategories');
  return data;
};
