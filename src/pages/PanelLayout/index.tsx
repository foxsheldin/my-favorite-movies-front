import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "@components/NavBar";

type Props = {};

const PanelLayout = (props: Props) => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default PanelLayout;
