import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "@pages/AuthPage/AuthPage";
import PanelLayout from "@pages/PanelLayout";
import FavoriteMoviePage from "@pages/FavoriteMoviePage";

const router = createBrowserRouter([
  { path: "/", element: <AuthPage /> },
  {
    path: "/panel",
    element: <PanelLayout />,
    children: [{ index: true, element: <FavoriteMoviePage /> }],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
