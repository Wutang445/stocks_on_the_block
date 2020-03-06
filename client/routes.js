import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";

import { Login, Signup } from "./components";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/portfolio" component={""} />
      <Route path="/home" component={""} />
    </Switch>
  );
};

export default Routes;
