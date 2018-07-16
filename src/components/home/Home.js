import React from "react";

import image from "../IMG/0507632_770727.jpg";
import image2 from "../IMG/496901_589135_01_front_thumbnail.jpg";
import image3 from "../IMG/485103_399386_01_front_thumbnail.jpg";
import image4 from "../IMG/0475912_249102.jpg";
import image5 from "../IMG/0463470_056358.jpg";
import image6 from "../IMG/desk.jpg";
import image7 from "../IMG/laptop.jpg";
import image8 from "../IMG/desktop.jpg";
import image9 from "../IMG/laptop.jpg";
import image10 from "../IMG/question.jpg";
import image11 from "../IMG/hardware.jpg";
import image12 from "../IMG/tablet.jpg";
import image13 from "../IMG/accessory.jpg";
import { Link } from "react-router-dom";
import "./home.css";

const Home = props => {
  return (
    <div class="Containers">
      <div class="first">
        <div id="laptop">
          <Link to="/Laptop">
            <img class="images" src={require("../IMG/laptop.jpg")} />{" "}
          </Link>
        </div>
        <div id="desktop">
          <Link to="/Desktop">
            <img class="images" src={require("../IMG/desktop.jpg")} />
          </Link>
        </div>
      </div>
      <div class="second">
        <div id="accersories">
          <Link to="/acessory">
            <img class="images" src={require("../IMG/accessory.jpg")} />
          </Link>
        </div>
        <div id="software">
          <Link to="/Tablet">
            <img class="images" src={require("../IMG/tablet.jpg")} />
          </Link>
        </div>
      </div>
      <div class="third">
        <div id="games">
          <Link to="/Hardware">
            <img class="images" src={require("../IMG/hardware.jpg")} />
          </Link>
        </div>
        <div id="tv">
          <img class="images" src={require("../IMG/question.jpg")} />
        </div>
      </div>
    </div>
  );
};

export default Home;
