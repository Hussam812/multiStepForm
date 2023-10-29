import React from "react";
import Class from "./css/Root.module.css";
import Navigator from "../components/Navigator";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <div className={Class.container}>
      <Navigator />
      <Outlet />
    </div>
  );
};

export default Root;
