import React from "react";
import Class from "./css/Navigator.module.css";

const naviList = [
  {
    id: 1,
    step: "STEP1",
    title: "YOUR INFO",
  },
  {
    id: 2,
    step: "STEP2",
    title: "select plan",
  },
  {
    id: 3,
    step: "STEP3",
    title: "add-ons",
  },
  {
    id: 4,
    step: "STEP4",
    title: "summary",
  },
];

const Navigator = () => {
  return (
    <div className={Class.container}>
      <ul className={Class.navlist}>
        {naviList.map((item) => (
          <li className={Class.navitem} key={item.id}>
            <span>{item.id}</span>
            <div className={Class.stepcontainer}>
              <p>{item.step}</p>
              <h4>{item.title}</h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigator;
