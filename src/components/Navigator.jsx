import React, { useEffect, useState } from "react";
import Class from "./css/Navigator.module.css";
import { Link, useLocation } from "react-router-dom";

const naviList = [
  {
    id: 1,
    step: "STEP1",
    title: "YOUR INFO",
    path: "/",
  },
  {
    id: 2,
    step: "STEP2",
    title: "select plan",
    path: "/plan",
  },
  {
    id: 3,
    step: "STEP3",
    title: "add-ons",
    path: "/addons",
  },
  {
    id: 4,
    step: "STEP4",
    title: "summary",
    path: "/summary",
  },
];

const Navigator = () => {
  const [activeState, setActiveState] = useState("/");
  const { pathname } = useLocation();
  const clickHandel = (path) => {
    setActiveState(path);
  };
  useEffect(() => {
    setActiveState(pathname);
  }, [pathname]);

  return (
    <div className={Class.container}>
      <ul className={Class.navlist}>
        {naviList.map((item) => (
          <li className={Class.navitem} key={item.id}>
            <Link
              to={item.path}
              end
              className={Class.link}
              onClick={() => setActiveState(item.path)}
            >
              <span
                className={`${item.path == activeState ? "active-state" : ""}`}
              >
                {item.id}
              </span>
            </Link>

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
