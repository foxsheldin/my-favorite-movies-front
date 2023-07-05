import React from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { WrappedContainer, AccountWrapper, WrappedHeader } from "./styles";
import ChangeLanguageButton from "@components/ChangeLanguageButton";
import { useTranslation } from "react-i18next";
import { useGetProfile } from "@api/graphql/hooks/queries/useGetProfile";
import { useLogoutMutation } from "@api/graphql/hooks/mutations/useLogoutMutation";

const NavBar = () => {
  const navigate = useNavigate();
  const { logoutMutation } = useLogoutMutation();
  const { t } = useTranslation();
  const { profile } = useGetProfile();

  const onLogoutClick = () => {
    logoutMutation();
    localStorage.removeItem("access_token");
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
              username: profile?.email.split("@")[0],
            })}
          </Typography>
          <Button onClick={onLogoutClick}>{t("navBar.logoutButton")}</Button>
        </AccountWrapper>
      </WrappedContainer>
    </WrappedHeader>
  );
};

export default NavBar;
