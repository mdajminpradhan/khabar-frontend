import { QueryClient, useMutation } from "react-query";
import { createAccount, loginAccount } from "apicalls/services/site";
import cogoToast from "cogo-toast";

export const useCreateAccount = () => {
  return useMutation(createAccount, {
    onSuccess: () => {
      cogoToast.success("Your account was created successfully...", {
        position: "top-right",
      });
    },
  });
};

export const useLoginAccount = () => {
  return useMutation(loginAccount, {
    onSuccess: (data) => {
      cogoToast.success("Your have logged in successfully...", {
        position: "top-right",
      });
    },
  });
};
