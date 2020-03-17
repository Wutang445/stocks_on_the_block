import React from "react";
import { connect } from "react-redux";

const Home = props => {
  console.log(props);
  return (
    <div>
      {props.user.id ? (
        <h1>Welcome back, {props.user.email}</h1>
      ) : (
        <h1>Sign up to get started</h1>
      )}
    </div>
  );
};

const mapState = state => {
  return {
    user: state.user
  };
};

export default connect(mapState, null)(Home);
