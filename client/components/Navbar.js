import React from "react";

const Navbar = () => {
  return (
    <div className="Navbar">
      <h1>Stocks on the Block</h1>

      <nav>
        <a href="#">Home</a>
        <a href="#">User</a>
        <a href="#">Portfolio</a>
        <a href="#">Transactions</a>
      </nav>

      <hr />
    </div>
  );
};

export default Navbar;
