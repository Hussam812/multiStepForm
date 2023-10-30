import React, { useContext, useState } from "react";
import Title from "./Title";
import Class from "./css/Plan.module.css";
import { plans } from "../data";
import NextButton from "./NextButton";
import BackButtons from "./BackButtons";
import { useDispatch, useSelector } from "react-redux";
import { selectPlan, selectedLength } from "../RTK/Slices/PlanSlice";

const para = "You have the option of monthly or yearly billing.";
const Plan = () => {
  const { selectedplan, duration } = useSelector((state) => state.plan);
  const dispatch = useDispatch();
  console.log(duration);

  return (
    <div className="page-container">
      <Title title={"Select your plan"} para={para} />
      <div className={Class.cards}>
        {plans.map((item) => (
          <div
            className={`${
              selectedplan.name === item.name
                ? `${Class.cardcontaienr} ${Class.SelectedPlan}`
                : Class.cardcontaienr
            }`}
            key={item.id}
            onClick={() => dispatch(selectPlan(item))}
          >
            <img src={item.image} imagealt="" className={Class.cardimg} />
            <div className={Class.cardinfo}>
              <h3>{item.name}</h3>
              <p>{duration === "monthly" ? item.price[0] : item.price[1]}</p>
            </div>
            {duration === "yearly" && (
              <span className={Class.cardinfoyear}>2months free</span>
            )}
          </div>
        ))}
      </div>

      <div className={Class.actioncontainer}>
        <p
          onClick={() => {
            dispatch(selectedLength("monthly"));
          }}
          className={`${duration === "monthly" ? Class.monthactive : ""}`}
        >
          Monthly
        </p>
        <div
          className={`${
            duration === "yearly"
              ? `${Class.year} ${Class.actionbutton}`
              : Class.actionbutton
          }`}
          onClick={() => {
            dispatch(
              selectedLength(duration === "monthly" ? "yearly" : "monthly")
            );
          }}
        >
          <span></span>
        </div>
        <p
          onClick={() => {
            dispatch(selectedLength("yearly"));
          }}
          className={`${duration === "yearly" ? Class.monthactive : ""}`}
        >
          Yearly
        </p>
      </div>

      <div className="btn-container">
        <BackButtons link={"/"} />
        <NextButton text={"Next step"} link={"/addons"} />
      </div>
    </div>
  );
};

export default Plan;
