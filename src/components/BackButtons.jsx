import React from "react";
import { Link } from "react-router-dom";

const BackButtons = ({ link }) => {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <p className={"back-btn"}>Go back</p>
    </Link>
  );
};

export default BackButtons;
