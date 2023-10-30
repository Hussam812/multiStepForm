import React, { useEffect } from "react";
import Class from "./css/Info.module.css";
import Title from "./Title";
import NextButton from "./NextButton";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addName, addemail, addphone } from "../RTK/Slices/FormInfoSlice";
const para = "Please provide your name, email address, and phone number.";

let validationForm = yup.object().shape({
  name: yup
    .string("Please enter a name")
    .required("This Field Is Required")
    .min(5, "please enter a name with minimum 5 chracters"),
  email: yup
    .string()
    .email("Please Enter an Email")
    .required("This Field Is Required"),
  phone: yup
    .number("Please Enter a Valid Number")
    .required("This Field Is Required"),
});

const Info = () => {
  const dispatch = useDispatch();
  const { usrname, usremail, usrphone } = useSelector(
    (state) => state.userinfo
  );
  const formik = useFormik({
    initialValues: {
      name: usrname,
      phone: usremail,
      phone: usrphone,
    },
    validationSchema: validationForm,
    validateOnChange: true,
    validateOnBlur: true,
  });

  const handelchange = (e) => {
    formik.handleChange(e);
    e.target.name === "name"
      ? dispatch(addName(e.target.value))
      : e.target.name === "email"
      ? dispatch(addemail(e.target.value))
      : dispatch(addphone(e.target.value));
  };

  return (
    <div className={"page-container"}>
      <Title title={"Personal info"} para={para} />
      <div className={Class.inputscontainer}>
        <div className={Class.inputcontainer}>
          <label htmlFor="name">
            Name<small>{formik.touched.name && formik.errors.name}</small>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onBlur={formik.handleBlur}
            onChange={(e) => handelchange(e)}
            value={usrname}
            placeholder="e.g.Stephen King"
          />
        </div>
        <div className={Class.inputcontainer}>
          <label htmlFor="email">
            Email Address
            <small>{formik.touched.email && formik.errors.email}</small>
          </label>
          <input
            type="text"
            name="email"
            id="email"
            onBlur={formik.handleBlur}
            onChange={(e) => handelchange(e)}
            value={usremail}
            placeholder="e.g.stephenking@lorem.com"
          />
        </div>
        <div className={Class.inputcontainer}>
          <label htmlFor="phone">
            Phone Number
            <small>{formik.touched.phone && formik.errors.phone}</small>
          </label>
          <input
            type="number"
            name="phone"
            id="phone"
            onBlur={formik.handleBlur}
            onChange={(e) => handelchange(e)}
            value={usrphone}
            placeholder="e.g.+1 234567890"
          />
        </div>
      </div>

      <div className="btn-container single">
        {/* <button type="submit" className="btn">
          Next step
        </button> */}
        <NextButton text={"Next step"} link={"/plan"} type={"submit"} />
      </div>
    </div>
  );
};

export default Info;
