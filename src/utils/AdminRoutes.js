import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "universal-cookie";
import jwt from "jsonwebtoken";

const AdminRoute = ({ component: Component, ...rest }) => {

  const cookie = new Cookies();
  const user = cookie.get("loginaccount");

  const isValidUser = () => {
    try {
      const verify = jwt.verify(user?.token, process.env.REACT_APP_JWTSECRET);
      if (verify.iat) {
        return true;
      }
    } catch (error) {
      return false;
    }
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        isValidUser() && user?.user?.role === 1 ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/createaccount",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
