import React from "react";
import Class from "./css/Confirm.module.css";
import thnkImg from "../assets/images/icon-thank-you.svg";

const para =
  "Thanks for confirming your subscription we hope you have fun using our platform. if you ever need support, please feel free to email us at support@loremfaming.com.";
const Confirm = () => {
  return (
    <div className={Class.confirm}>
      <img src={thnkImg} alt="" />
      <div className={Class.confirmText}>
        <h2>Thank you!</h2>
        <p>{para}</p>
      </div>
    </div>
  );
};

export default Confirm;
