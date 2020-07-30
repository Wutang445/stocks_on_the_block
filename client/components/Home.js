import React from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";

const HomeDiv = styled.div`
  text-align: center;
`;

const Home = (props) => {
  const [cash, setCash] = React.useState(5000);
  return (
    <div>
      <HomeDiv>
        <h1>
          Buy, sell and trade through a robust and intuitive trading interface,
          all with peace of mind.
        </h1>
        <p>
          Our simulation allows people to practice their transactions on the
          most popular stocks without having to sacrifice personal finances.
        </p>
        {/* <h1>Sign up to get started</h1> */}

        {props.user.id ? (
          <h1>
            Welcome back, {props.user.email}. You currently have ${cash} to
            spend.
          </h1>
        ) : (
          ""
        )}
      </HomeDiv>
    </div>
  );
};

const mapState = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapState, null)(Home);
