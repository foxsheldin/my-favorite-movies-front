import React, { useEffect } from "react";
import AuthForm from "@components/AuthForm";
import { CustomizedContainer } from "./styles";
import logo from "@images/movie-logo.webp";
import { backendData } from "temp/backendData";

const AuthPage = () => {
  useEffect(() => {
    localStorage.setItem("DB_user", "admin");
    localStorage.setItem("DB_user_password", "12345678");
    localStorage.setItem(
      "DB_user_favorite_movies",
      JSON.stringify(backendData.favoriteMovies)
    );
    localStorage.setItem(
      "DB_user_favorite_genres",
      JSON.stringify(backendData.favoriteGenres)
    );
  }, []);

  return (
    <CustomizedContainer>
      <img src={logo} width={150} height={150} />
      <AuthForm />
    </CustomizedContainer>
  );
};

export default AuthPage;
