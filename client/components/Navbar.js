import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store";

import { NavContainer, NavLinks } from "./styledcomponents/Navbar";

const Navbar = (props) => {
  const { isLoggedIn } = props;

  return (
    <NavContainer>
      <h1>Stocks on the Block</h1>

      {isLoggedIn ? (
        <nav>
          <NavLinks as={Link} to="/home">
            Home
          </NavLinks>

          <NavLinks href="#" onClick={props.handleClick}>
            Logout
          </NavLinks>

          <NavLinks as={Link} to="/market">
            Market
          </NavLinks>
          <NavLinks as={Link} to="/transactions">
            Transactions
          </NavLinks>
          <NavLinks as={Link} to="/useraccount">
            My Account
          </NavLinks>
        </nav>
      ) : (
        <nav>
          <NavLinks as={Link} to="/home">
            Home
          </NavLinks>
          <NavLinks as={Link} to="/login">
            Login
          </NavLinks>
          <NavLinks as={Link} to="/signup">
            Sign Up
          </NavLinks>
          <NavLinks as={Link} to="/market">
            Market
          </NavLinks>
          <NavLinks as={Link} to="/transactions">
            Transactions
          </NavLinks>
        </nav>
      )}
    </NavContainer>
  );
};

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
