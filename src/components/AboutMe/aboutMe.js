import React from "react";
import { Link } from "react-router-dom";

const AboutMe = props => {
  return (
    <div>
      <div className="pic">
        <img class="images" src={require("../IMG/pic.jpg")} />
      </div>
      <p>
        My name is Cristian Gonzalez
        <br />
        I've been coding for about 2 months and I mainly wanted to show my
        progress with this project.<br />
        The different technologys ive used where
        <ul>
          <Link to="/login" />
          <li>React</li>
          <li>Redux</li>
          <li>Node</li>
          <li>Massive</li>
          <li>Express</li>
          <li>Postgresql</li>
          <li>Css</li>
        </ul>
      </p>
    </div>
  );
};

export default AboutMe;
