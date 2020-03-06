import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";

import LoginSignUp from "./components/LoginSignUp";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginSignUp} />
      <Route path="/signup" component={""} />
      <Route path="/portfolio" component={""} />
      <Route path="/home" component={""} />
    </Switch>
  );
};

export default Routes;
