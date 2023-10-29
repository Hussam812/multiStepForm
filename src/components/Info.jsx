import React from "react";
import Class from "./css/Info.module.css";
import Title from "./Title";
import NextButton from "./NextButton";
const para = "Please provide your name, email address, and phone number.";
const Info = () => {
  return (
    <div className={"page-container"}>
      <Title title={"Personal info"} para={para} />
      <div className={Class.inputscontainer}>
        <div className={Class.inputcontainer}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g.Stephen King"
          />
        </div>
        <div className={Class.inputcontainer}>
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="e.g.stephenking@lorem.com"
          />
        </div>
        <div className={Class.inputcontainer}>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="e.g.+1 234567890"
          />
        </div>
      </div>

      <div className="btn-container single">
        <NextButton text={"Next step"} />
      </div>
    </div>
  );
};

export default Info;
