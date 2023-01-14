import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import "./index.css";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Series from "./pages/Series";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:category_id",
    element: <Categories />,
  },
  {
    path: "/:category_id/:series_id",
    element: <Series />,
  },
  {
    path: "/about",
    element: (
      <div className="container">
        <Header></Header>
        <h1 className="mb-4">About</h1>
        {/* TODO: Update description of website */}
        <p>This is an app</p>
      </div>
    ),
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
