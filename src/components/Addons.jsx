import React from "react";
import Title from "./Title";
import Class from "./css/Addons.module.css";
import { addons } from "../data";
import BackButtons from "./BackButtons";
import NextButton from "./NextButton";
import { useDispatch, useSelector } from "react-redux";
import { pickAddon, selectAddons } from "../RTK/Slices/AddonSelctorSlice";
const para = "Add-ons help enhance your gaming experience.";
const Addons = () => {
  const { duration } = useSelector((state) => state.plan);
  const SelectedAddons = useSelector((state) => state.selectedAddons);
  const dispatch = useDispatch();

  const cliclHandeler = (item) => {
    dispatch(selectAddons(item));
    //console.log(SelectedAddons);
  };
  return (
    <div className="page-container">
      <Title title={"Pick add-ons"} para={para} />

      <div className={Class.addons}>
        {addons.map((item) => (
          <div
            className={` ${
              SelectedAddons.find((elem) => elem.id === item.id)
                ? `${Class.Addonscard} ${Class.addonSelected}`
                : `${Class.Addonscard}`
            }`}
            key={item.id}
            onClick={() => cliclHandeler(item)}
          >
            <input
              type="checkbox"
              checked={SelectedAddons.find((elem) => elem.id === item.id)}
            />
            <div className={Class.addonsinfo}>
              <h2>{item.title}</h2>
              <p>{item.subtitle}</p>
            </div>
            <span className={Class.addonsprice}>
              {duration === "monthly" ? item.price[0] : item.price[1]}
            </span>
          </div>
        ))}
      </div>

      <div className="btn-container">
        <BackButtons link={"/plan"} />
        <NextButton text={"Next step"} link={"/summary"} />
      </div>
    </div>
  );
};

export default Addons;
