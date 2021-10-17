import React from "react";
import { Switch, Route } from "react-router";
import Login from "./pages/Login";
import Video from "./pages/Video";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/video">
        <Video />
      </Route>
    </Switch>
  );
};

export default Routes;
