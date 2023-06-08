import React from "react";
import AuthForm from "@components/AuthForm";
import ChangeLanguageButton from "@components/ChangeLanguageButton";
import logo from "@images/movie-logo.webp";
import { WrappedContainer } from "./styles";

const AuthPage = () => {
  return (
    <WrappedContainer>
      <img src={logo} width={150} height={150} />
      <AuthForm />
      <ChangeLanguageButton />
    </WrappedContainer>
  );
};

export default AuthPage;
