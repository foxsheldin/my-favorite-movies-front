import React, { useEffect } from "react";
import AuthForm from "../../components/AuthForm";
import { CustomizedContainer } from "./styles";
import logo from "../../assets/image/movie-logo.webp";

const AuthPage = () => {
  useEffect(() => {
    localStorage.setItem("DB_user", "admin");
    localStorage.setItem("DB_user_password", "12345678");
  }, []);

  return (
    <CustomizedContainer>
      <img src={logo} width={150} height={150} />
      <AuthForm />
    </CustomizedContainer>
  );
};

export default AuthPage;
