import React from "react";
import classes from "./index.module.scss";

const index = ({ children, image, variant, ...props }) => {
  const imgStyles = variant === "google" ? { left: 3 } : {};
  return (
    <button className={classes.Btn} {...props}>
      <img src={image} style={imgStyles} alt="img" />
      {children}
    </button>
  );
};

export default index;
