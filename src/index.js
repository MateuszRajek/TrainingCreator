import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Dashboard from "./Components/Dashboard/Dashboard";
import RegistrationView from "./Components/RegistrationView/RegistrationView";
import LoginView from "./Components/LoginView/LoginView";

const root = createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/registration",
    element: <RegistrationView />,
  },
  {
    path: "/login",
    element: <LoginView />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

