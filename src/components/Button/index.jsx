import React from "react";
import classes from "./button.module.css";
const Button = (props) => {
  return (
    <button {...props} className={classes.button}>
      {props.children}
    </button>
  );
};

export default Button;
