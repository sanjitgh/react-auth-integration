import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthProvaider from "./provaider/AuthProvaider";
import Order from "./components/Order";
import PrivetRoutes from "./routes/PrivetRoutes";
import Profile from "./components/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/orders",
        element: (
          <PrivetRoutes>
            <Order></Order>
          </PrivetRoutes>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivetRoutes>
            <Profile></Profile>
          </PrivetRoutes>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvaider>
      <RouterProvider router={router} />
    </AuthProvaider>
  </StrictMode>
);
