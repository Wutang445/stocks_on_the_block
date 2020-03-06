import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <h1>Stocks on the Block</h1>

      <nav>
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">SignUp</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/transactions">Transactions</Link>
      </nav>

      <hr />
    </div>
  );
};

export default Navbar;
