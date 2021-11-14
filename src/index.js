import React from "react";
import ReactDOM from "react-dom";
import "./assets/sass/app.scss";
import Routes from "./Routes";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "react-query";
import Cookies from "universal-cookie";
const queryClient = new QueryClient();
const cookie = new Cookies();

// getting logged in user info
const profile = cookie.get("loginaccount");

axios.defaults.baseURL = process.env.REACT_APP_API;
axios.defaults.headers.common["Authorization"] = profile !== ""
  ? `Bearer ${profile?.token}`
  : "";
axios.defaults.headers.post["Content-Type"] = "application/json";

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
