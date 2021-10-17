import React from "react";
import { Switch, Route } from "react-router";
import Challenge1 from "./pages/Challenge1";

const Routes = () => {
  return (
    <Switch>
      <Route path="/challenge_1">
        <Challenge1 />
      </Route>
    </Switch>
  );
};

export default Routes;
