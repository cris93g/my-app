import React, { Fragment } from "react";
import banner from "../IMG/new.png";
import "./Login.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import styled from "styled-components";
const Wrapper = styled.section`
  background-color: #69e9f5;
  height: 100%;
  width: 100%;
`;

const Login = () => (
  <Wrapper>
    <Fragment>
      <img className="img" alt="banner" src={require("../IMG/new.png")} />
      <h2>Experience Greatness</h2>
      <h2>Join the Community Today</h2>
      <br />
      <Link to="/home">
        <Button>Login</Button>
      </Link>
      <br />
      <br />
    </Fragment>
  </Wrapper>
);

export default Login;
