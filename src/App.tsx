import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";

const router = createBrowserRouter([{ path: "/", element: <AuthPage /> }]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
