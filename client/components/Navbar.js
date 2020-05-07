import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store";

const Navbar = (props) => {
  const { isLoggedIn } = props;

  return (
    <div className="Navbar">
      <h1>Stocks on the Block</h1>

      {isLoggedIn ? (
        <nav>
          <Link to="/home">Home</Link>
          <a href="#" onClick={props.handleClick}>
            Logout
          </a>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/transactions">Transactions</Link>
        </nav>
      ) : (
        <nav>
          <Link to="/home">
            <button>Home</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/signup">
            <button>SignUp</button>
          </Link>
          <Link to="/portfolio">
            <button>Portfolio</button>
          </Link>
          <Link to="/transactions">
            <button>Transactions</button>
          </Link>
        </nav>
      )}

      <hr />
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
