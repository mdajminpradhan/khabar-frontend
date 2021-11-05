import React from "react";
import ReactDOM from "react-dom";
import "./assets/sass/app.scss";
import Routes from "./Routes";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

const token = JSON.parse(localStorage.getItem("jwt"));

axios.defaults.baseURL = process.env.REACT_APP_API;
axios.defaults.headers.common["Authorization"] = token
  ? `Bearer ${token.token}`
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
