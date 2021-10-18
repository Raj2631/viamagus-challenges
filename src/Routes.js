import React from "react";
import { Switch, Route } from "react-router";
import DateChallenge from "./pages/Date";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Video from "./pages/Video";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/video">
        <Video />
      </Route>
      <Route path="/date">
        <DateChallenge />
      </Route>
    </Switch>
  );
};

export default Routes;
