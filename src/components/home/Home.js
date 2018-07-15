import React from "react";

import image from "../IMG/0507632_770727.jpg";
import image2 from "../IMG/496901_589135_01_front_thumbnail.jpg";
import image3 from "../IMG/485103_399386_01_front_thumbnail.jpg";
import image4 from "../IMG/0475912_249102.jpg";
import image5 from "../IMG/0463470_056358.jpg";
import image6 from "../IMG/desk.jpg";
import image7 from "../IMG/laptop.jpg";
import image8 from "../IMG/desktops.jpg";
import image9 from "../IMG/laptop2.png";
import image10 from "../IMG/desktop.png";
import image11 from "../IMG/hardware.png";
import image12 from "../IMG/tablet.png";
import image13 from "../IMG/acessory.png";
import { Link } from "react-router-dom";
import "./home.css";

const Home = props => {
  return (
    <div class="Containers">
      <div class="first">
        <div id="laptop">
          <Link to="/Laptop">
            <img class="images" src={require("../IMG/laptop2.png")} />{" "}
          </Link>
        </div>
        <div id="desktop">
          <Link to="/Desktop">
            <img class="images" src={require("../IMG/desk.jpg")} />
          </Link>
        </div>
      </div>
      <div class="second">
        <div id="accersories">
          <Link to="/acessory">
            <img class="images" src={require("../IMG/acessory.png")} />
          </Link>
        </div>
        <div id="software">
          <Link to="/Tablet">
            <img class="images" src={require("../IMG/tablet.png")} />
          </Link>
        </div>
      </div>
      <div class="third">
        <div id="games">
          <Link to="/Hardware">
            <img class="images" src={require("../IMG/hardware.png")} />
          </Link>
        </div>
        <div id="tv">
          <img
            class="images"
            src={require("../IMG/482679_364711_01_front_thumbnail.jpg")}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
