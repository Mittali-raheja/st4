
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Data.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Form = () => {
  const [state, setState] = useState(JSON.parse(localStorage.getItem("data")));
  const handleSubmit = () => {};
  return (
    <div>
      <div className="my-5 ">
        <h1 className="text"> Thanks for submitting</h1>
      </div>
      <div className={classes.divArea}>
        <div className={classes.showData}>
          <p>
            <b>Name :</b> {state.fullName}
          </p>
          <p>
            <b>Phone no :</b> {state.number}
          </p>
          <p>
            <b>Email :</b> {state.email}
          </p>
          <p>
            <b>Message :</b> {state.message}
          </p>
        </div>
      </div>
      <button className={classes.backBtn} type="text">
        <NavLink to="/">Back</NavLink>
      </button>
    </div>
  );
};
export default Form;
