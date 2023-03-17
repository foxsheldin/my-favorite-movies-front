import React from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CustomizedContainer, CustomizedDiv, CustomizedHeader } from "./styles";

const NavBar = () => {
  const navigate = useNavigate();

  const onLogoutClick = () => {
    localStorage.removeItem("DB_auth_user");
    navigate("/");
  };

  return (
    <CustomizedHeader>
      <CustomizedContainer>
        <Typography variant="h5" component="p">
          My Favorite Movies
        </Typography>
        <CustomizedDiv>
          <Typography>
            Hello, {localStorage.getItem("DB_auth_user")}!
          </Typography>
          <Button onClick={onLogoutClick}>Log out</Button>
        </CustomizedDiv>
      </CustomizedContainer>
    </CustomizedHeader>
  );
};

export default NavBar;
