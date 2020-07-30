import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const NavContainer = styled.div`
  text-align: center;
  background: dodgerblue;
  color: white;
  width: 100%;
  height: 100%;
  padding: 50px;
`;

const NavLinks = styled.a`
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  &:hover {
    background-color: red;
  }
`;

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

          <NavLinks as={Link} to="/portfolio">
            Portfolio
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
          <NavLinks as={Link} to="/portfolio">
            Portfolio
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
