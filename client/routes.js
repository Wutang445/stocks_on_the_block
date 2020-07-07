import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";

import { Login, Signup, Home, Portfolio } from "./components";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/home" component={Home} />
    </Switch>
  );
};

export default withRouter(Routes);
