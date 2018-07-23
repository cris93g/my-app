import React, { Fragment } from "react";

import "./Login.css";
import { Button } from "react-bootstrap";

const Login = () => (
  <Fragment>
    {/* <img className="img" alt="banner" src={require("../IMG/logo.png")} /> */}
    <h2>Join the Community Today</h2>
    <a href={process.env.REACT_APP_LOGIN}>
      <Button>Login</Button>
    </a>
  </Fragment>
);

export default Login;
