import React from "react";
import { Link } from "react-router-dom";
import classes from "./index.module.scss";

const Home = () => {
  return (
    <div className={classes.Container}>
      <h1>Navigate to the challenges through here.</h1>
      <div className={classes.LinkContainer}>
        <Link to="/login">Login</Link>
        <Link to="/video">Video</Link>
        <Link to="/date">Date</Link>
      </div>
    </div>
  );
};

export default Home;
