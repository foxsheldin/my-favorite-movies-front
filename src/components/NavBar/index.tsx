import React from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { WrappedContainer, AccountWrapper, WrappedHeader } from "./styles";

const NavBar = () => {
  const navigate = useNavigate();

  const onLogoutClick = () => {
    localStorage.removeItem("DB_auth_user");
    navigate("/");
  };

  return (
    <WrappedHeader>
      <WrappedContainer>
        <Typography variant="h5" component="p">
          My Favorite Movies
        </Typography>
        <AccountWrapper>
          <Typography>
            Hello, {localStorage.getItem("DB_auth_user")}!
          </Typography>
          <Button onClick={onLogoutClick}>Log out</Button>
        </AccountWrapper>
      </WrappedContainer>
    </WrappedHeader>
  );
};

export default NavBar;
