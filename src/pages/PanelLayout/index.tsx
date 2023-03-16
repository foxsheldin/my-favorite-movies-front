import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "@components/NavBar";

const PanelLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default PanelLayout;
