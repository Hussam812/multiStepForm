import React, { useEffect } from "react";
import Title from "./Title";
import Class from "./css/Summary.module.css";
import { Link } from "react-router-dom";
import NextButton from "./NextButton";
import BackButtons from "./BackButtons";
import { useDispatch, useSelector } from "react-redux";
import { sumAddonTotal } from "../RTK/Slices/AddonSelctorSlice";
const para = "Double-check everything looks Ok before confirming.";
const enterPlan = "Please Select A Plan";
const Summary = () => {
  const { selectedplan, duration } = useSelector((state) => state.plan);
  const dispatch = useDispatch();
  const addons = useSelector((state) => state.selectedAddons);
  const checkPlan = Object.keys(selectedplan).length > 0;
  const checkaddons = addons.length > 0;
  const month = duration === "monthly";

  const total = () => {
    const checkPlan = Object.keys(selectedplan).length > 0;
    const checkaddons = addons.length > 0;

    const totalplan = month
      ? checkPlan
        ? +selectedplan.price[0].match("[0-9]+")[0]
        : 0
      : checkPlan
      ? +selectedplan.price[1].match("[0-9]+")[0]
      : 0;

    let totalAddons = 0;
    if (!checkaddons) {
      totalAddons = 0;
    } else if (addons.length === 1) {
      month
        ? (totalAddons = +addons[0].price[0].match("[0-9]+")[0])
        : (totalAddons = +addons[0].price[1].match("[0-9]+")[0]);
    } else if (addons.length > 1) {
      month
        ? addons.map((item) => {
            totalAddons += +item.price[0].match("[0-9]+")[0];
          })
        : addons.map((item) => {
            totalAddons += +item.price[1].match("[0-9]+")[0];
          });
    }

    return totalAddons + totalplan;
  };

  useEffect(() => {
    total();
  }, [addons, selectedplan]);

  return (
    <div className="page-container">
      <Title title={"Finishing"} para={para} />
      <div className={Class.summarycontainer}>
        <div className={Class.summaryplan}>
          <div className={Class.plan}>
            <h2>
              {checkPlan ? `${selectedplan.name} (${duration})` : enterPlan}
            </h2>
            <Link to={"/plan"} className={Class.planlink}>
              Change
            </Link>
          </div>

          <span className={Class.planprice}>
            {!checkPlan ? (
              <></>
            ) : month ? (
              selectedplan.price[0]
            ) : (
              selectedplan.price[1]
            )}
          </span>
        </div>

        <hr></hr>
        <div className={Class.summaryaddons}>
          {addons.length === 1 ? (
            <div className={Class.summaryAddon}>
              <p>{addons[0].title}</p>
              <span>{month ? addons[0].price[0] : addons[0].price[1]}</span>
            </div>
          ) : addons.length === 0 ? (
            <></>
          ) : (
            addons.map((item) => (
              <div className={Class.summaryAddon}>
                <p>{item.title}</p>
                <span>{month ? item.price[0] : item.price[1]}</span>
              </div>
            ))
          )}
        </div>
      </div>
      <div className={Class.total}>
        <p className={Class.totalTitle}>
          Total(per {month ? "month" : "year"})
        </p>
        <p className={Class.totalPrice}>{`+$ ${total()} ${
          month ? "/mo" : "/yr"
        }`}</p>
      </div>

      <div className="btn-container">
        <BackButtons link={"/addons"} />
        <NextButton text={"Confirm"} link={"/confirm"} />
      </div>
    </div>
  );
};

export default Summary;
