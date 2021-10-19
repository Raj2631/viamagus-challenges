import React from "react";

import classes from "./index.module.scss";

import { ReactComponent as ErrorIcon } from "../../assets/error.svg";

const index = ({ title, register, error, ...props }) => {
  return (
    <div className={classes.Container}>
      <input placeholder={title} {...register} id={title} {...props} />
      {error && (
        <small className={classes.Error}>
          <ErrorIcon className={classes.Icon} />
          <span>{error.message}</span>
        </small>
      )}
    </div>
  );
};

export default index;
