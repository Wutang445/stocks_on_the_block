import React from "react";

const header = () => {
  return (
    <div className="header">
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

export default header;
