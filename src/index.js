import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./rootes";
import { Addons, Confirm, Info, Plan, Summary } from "./components";
import { Provider } from "react-redux";
import { store } from "./RTK/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Info />,
      },
      {
        path: "plan",
        element: <Plan />,
      },
      {
        path: "addons",
        element: <Addons />,
      },
      {
        path: "summary",
        element: <Summary />,
      },
      {
        path: "confirm",
        element: <Confirm />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
