import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { Container } from "@mui/material";
import AuthForm from "../../components/AuthForm/AuthForm";
const logo = require("../../assets/image/wordpress-logo.webp");

const AuthPage = () => {
  useEffect(() => {
    localStorage.setItem("DB_user", "admin");
    localStorage.setItem("DB_user_password", "12345678");
  }, []);

  const CustomizedContainer = styled(Container)`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    align-items: center;
    justify-content: center;
  `;

  return (
    <CustomizedContainer>
      <img src={logo} width={150} height={150} />
      <AuthForm />
    </CustomizedContainer>
  );
};

export default AuthPage;
