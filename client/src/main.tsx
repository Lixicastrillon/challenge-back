import React from "react";
import { DetailUser } from "./components/DetailUser/DetailUser.tsx";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CreateUser } from "./components/CreateUser/CreateUser.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create",
    element: <CreateUser />,
  },
  {
    path: "/detail/:id",
    element: <DetailUser />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
