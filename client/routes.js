import React, { useEffect } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { Login, Signup, Home, Market, UserAccount } from "./components";
import { me } from "./store";

const Routes = (props) => {
  const { isLoggedIn } = props;

  useEffect(() => {
    props.loadInitialData();
  }, []);

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

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

export default connect(mapState, mapDispatch)(withRouter(Routes));
