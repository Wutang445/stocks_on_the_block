import React from "react";
import { connect } from "react-redux";
import { auth } from "../store";

const LoginSignUp = () => {
  return (
    <div>
      <form>
        <label>Username/Email</label>
        <input type="text" name="username" />
        <label>Password</label>
        <input type="text" name="password" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

const mapLogin = state => {
  return {
    name: "login",
    displayName: "Login",
    error: state.user.error
  };
};

const mapSignup = state => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.user.error
  };
};

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(auth(email, password, formName));
    }
  };
};

export const Login = connect(mapLogin, mapDispatch)(LoginSignUp);
export const Signup = connect(mapSignup, mapDispatch)(LoginSignUp);
