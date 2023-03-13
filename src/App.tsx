import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "@pages/AuthPage/AuthPage";
import PanelLayout from "@pages/PanelLayout";

const router = createBrowserRouter([
  { path: "/", element: <AuthPage /> },
  {
    path: "/panel",
    element: <PanelLayout />,
    children: [],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
