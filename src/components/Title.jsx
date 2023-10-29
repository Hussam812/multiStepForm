import React from "react";

const Title = ({ title, para }) => {
  return (
    <div className={`title-container`}>
      <h1>{title}</h1>
      <p>{para}</p>
    </div>
  );
};

export default Title;
