import React from "react";
import { connect } from "react-redux";

const UserAccount = (props) => {
  const User = props.user;
  return (
    <div>
      <h1>Welcome {User.email}</h1>
      <h1>You currently have ${User.funds} in your account</h1>
    </div>
  );
};

const mapState = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapState, null)(UserAccount);
