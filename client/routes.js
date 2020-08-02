import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { Login, Signup, Home, Market, UserAccount } from "./components";

const Routes = (props) => {
  const { isLoggedIn } = props;
  console.log(isLoggedIn);
  return (
    <Switch>
      {isLoggedIn ? <Route path="/useraccount" component={UserAccount} /> : ""}
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/market" component={Market} />
      <Route path="/home" component={Home} />
    </Switch>
  );
};

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
  };
};

export default connect(mapState, null)(withRouter(Routes));
