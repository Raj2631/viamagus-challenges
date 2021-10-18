import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Helmet } from "react-helmet";
import ReactDom from "react-dom";
import classes from "./index.module.scss";

const RED_CIRCLE_STYLES = {
  position: "fixed",
  width: 50,
  height: 50,
  left: 550,
  top: 300,
  background: "red",
  borderRadius: "50%",
};

const Video = () => {
  const [showRedCircle, setShowRedCircle] = useState(false);
  return (
    <>
      <Helmet>
        <title>Video Challenge</title>
      </Helmet>
      <div
        className={classes.Container}
        onMouseOver={() => setShowRedCircle(true)}
        onMouseLeave={() => setShowRedCircle(false)}
      >
        <ReactPlayer url="https://www.youtube.com/watch?v=1w7OgIMMRc4" />
        {showRedCircle &&
          ReactDom.createPortal(
            <div style={RED_CIRCLE_STYLES} />,
            document.getElementById("portal")
          )}
      </div>
    </>
  );
};

export default Video;
