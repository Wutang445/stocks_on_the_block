import styled, { css } from "styled-components";

export const NavContainer = styled.div`
  text-align: center;
  background: #72a1e5;
  color: white;
  width: 100%;
  height: 100%;
  padding: 50px;
`;

export const NavLinks = styled.a`
  background: #50c9ce;
  border-radius: 50px;
  margin: 0px 5px 0px;
  color: black;
  text-align: center;
  width: 200px;
  padding: 7px 20px 7px;
  text-decoration: none;

  &:hover {
    background-color: #9883e5;
  }
`;
