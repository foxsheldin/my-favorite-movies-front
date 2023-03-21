import React from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { WrappedContainer, AccountWrapper, WrappedHeader } from "./styles";
import ChangeLanguageButton from "@components/ChangeLanguageButton";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onLogoutClick = () => {
    localStorage.removeItem("DB_auth_user");
    navigate("/");
  };

  return (
    <WrappedHeader>
      <WrappedContainer>
        <Typography variant="h5" component="p">
          {t("navBar.serviceName")}
        </Typography>
        <AccountWrapper>
          <ChangeLanguageButton />
          <Typography>
            {t("navBar.greetings", {
              username: localStorage.getItem("DB_auth_user"),
            })}
          </Typography>
          <Button onClick={onLogoutClick}>{t("navBar.logoutButton")}</Button>
        </AccountWrapper>
      </WrappedContainer>
    </WrappedHeader>
  );
};

export default NavBar;
