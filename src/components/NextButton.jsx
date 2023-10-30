import React from "react";
import { Link } from "react-router-dom";

const NextButton = ({ text, link, type }) => {
  return (
    <Link to={link}>
      <button className={"btn"} type={type}>
        {text}
      </button>
    </Link>
  );
};

export default NextButton;
