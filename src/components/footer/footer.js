import React from "react";

import { Link } from "react-router-dom";
import "./footer.css";
var style = {
  backgroundColor: "white",
  borderTop: "1px solid silver",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "45px",
  width: "100%"
};

var phantom = {
  // display: "block",
  // padding: "20px",
  height: "40px"
  // width: "100%"
};

function Footer({ children }) {
  return (
    <div>
      <div style={phantom} />

      <div style={style}>
        {children}
        <Link to="/AboutMe">
          <i class="material-icons">info</i>
        </Link>
        <Link to="/">
          <i class="material-icons md-60">home</i>
        </Link>
        <Link to="/Cart">
          <i class="material-icons">shopping_cart</i>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
