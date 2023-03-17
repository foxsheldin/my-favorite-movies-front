import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "@components/NavBar";

const PanelLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("DB_auth_user")) {
      navigate("/");
    }
  }, [localStorage]);

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default PanelLayout;
