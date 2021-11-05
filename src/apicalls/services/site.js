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
