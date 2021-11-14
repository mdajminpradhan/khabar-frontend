import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "assets/sass/auth/login.scss";
import Base from "core/user/Base";
import cogoToast from "cogo-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useLoginAccount } from "apicalls/hooks/site/useAuthUser";
import Cookies from "universal-cookie";
const cookie = new Cookies();

let schema = yup.object().shape({
  email: yup.string().email(),
  password: yup.string().required(),
});

let initialState = {
  email: "testname@mymail.com",
  password: "Jack2020@#$",
};

const Login = ({ history }) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialState,
  });

  const { mutateAsync, isSuccess, data: responseData } = useLoginAccount();

  // triger the function when user submit
  const handleLoginAccount = async (data) => {
    try {
      await mutateAsync(data);
    } catch (error) {
      cogoToast.error(error?.response?.data?.error, { position: "top-right" });
    }
  };

  if (isSuccess === true) {
    cookie.set("loginaccount", responseData, {
      path: "/",
    });

    history.push("/admin");
  }

  const watchAll = watch();

  useEffect(() => {
    // console.log(errors, watchAll);
  }, [errors, watchAll]);

  return (
    <Base>
      <div className="login">
        <form onSubmit={handleSubmit(handleLoginAccount)}>
          <h3>Login to your account</h3>
          <label htmlFor="email">Email address</label>
          <input type="email" {...register("email")} />

          <label htmlFor="password">Password</label>
          <input type="password" {...register("password")} />

          <button>Signin</button>
          <Link to="/createaccount">Don't have any account?</Link>
        </form>
      </div>
    </Base>
  );
};

export default Login;
