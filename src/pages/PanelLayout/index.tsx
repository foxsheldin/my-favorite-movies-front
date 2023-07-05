import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "@components/NavBar";

const PanelLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
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
