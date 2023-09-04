import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { globalRouters } from "@/router";
import App from "@/pages/home";
// 全局样式
import "@/common/styles/frame.styl";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={globalRouters} />
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
