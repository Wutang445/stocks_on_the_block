import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store";

const Navbar = (props) => {
  const { isLoggedIn } = props;

  return (
    <div className="navbar-container">
      <h1>Stocks on the Block</h1>

      {isLoggedIn ? (
        <nav className="navbar-links">
          <Link to="/home">Home</Link>

          <a href="#" onClick={props.handleClick}>
            Logout
          </a>

          <Link to="/portfolio">Portfolio</Link>
          <Link to="/transactions">Transactions</Link>
        </nav>
      ) : (
        <nav className="navbar-links">
          <Link to="/home">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/transactions">Transactions</Link>
        </nav>
      )}
    </div>
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
