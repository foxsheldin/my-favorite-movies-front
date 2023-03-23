import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "@pages/AuthPage/AuthPage";
import PanelLayout from "@pages/PanelLayout";
import FavoriteMoviePage from "@pages/FavoriteMoviePage";
import AddMoviePage from "@pages/AddMoviePage";

const router = createBrowserRouter([
  { path: "/", element: <AuthPage /> },
  {
    path: "/panel",
    element: <PanelLayout />,
    children: [
      { index: true, element: <FavoriteMoviePage /> },
      { path: "movie/add", element: <AddMoviePage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
