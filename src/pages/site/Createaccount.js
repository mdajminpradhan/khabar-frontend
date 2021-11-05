import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "assets/sass/auth/createaccount.scss";
import Base from "core/user/Base";
import { useForm } from "react-hook-form";
import { useCreateAccount } from "apicalls/hooks/site/useAuthUser";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import cogoToast from "cogo-toast";

let schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email(),
  password: yup.string().required(),
});

const Createaccount = ({ history }) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { mutateAsync } = useCreateAccount();

  // triger the function when user submit
  const handleCreateAccount = async (data) => {
    try {
      await mutateAsync(data);
      await history.push("/loginaccount");
    } catch (error) {
      cogoToast.error(error?.response?.data?.error, { position: "top-right" });
    }
  };

  const watchAll = watch();

  useEffect(() => {
    // console.log(errors, watchAll);
  }, [errors, watchAll]);

  return (
    <Base>
      <div className="createaccount">
        <form onSubmit={handleSubmit(handleCreateAccount)}>
          <h3>Crete an account</h3>
          <label htmlFor="name">Your name</label>
          <input type="text" {...register("name")} />

          <label htmlFor="email">Email address</label>
          <input type="email" {...register("email")} />

          <label htmlFor="password">Password</label>
          <input type="password" {...register("password")} />

          <button>Create account</button>
          <Link to="/loginaccount">Already have an account?</Link>
        </form>
      </div>
    </Base>
  );
};

export default Createaccount;
