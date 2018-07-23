import React from "react";

import image7 from "../IMG/laptop.jpg";
import image8 from "../IMG/desktop.jpg";
import image9 from "../IMG/laptop.jpg";
import image10 from "../IMG/question.jpg";
import image11 from "../IMG/hardware.jpg";
import image12 from "../IMG/tablet.jpg";
import image13 from "../IMG/accessory.jpg";
import { Link } from "react-router-dom";
import "./home.css";
import Slider from "../slider/Slider";

import styled from "styled-components";
const Wrapper = styled.section`
  margin-top: 10px;
  margin-bottom: 5px;
  background: papayawhip;
  border shadow:1px;
`;

const Home = props => {
  return (
    <div>
      <Slider />
      <div class="Containers">
        <div class="first">
          <Wrapper>
            <div id="laptop">
              <Link to="/Laptop">
                <img class="images" src={require("../IMG/laptop.jpg")} />{" "}
              </Link>
            </div>
          </Wrapper>
          <Wrapper>
            <div id="desktop">
              <Link to="/Desktop">
                <img class="images" src={require("../IMG/desktop.jpg")} />
              </Link>
            </div>
          </Wrapper>
        </div>

        <div class="second">
          <Wrapper>
            <div id="accersories">
              <Link to="/acessory">
                <img class="images" src={require("../IMG/acessory.jpg")} />
              </Link>
            </div>
          </Wrapper>
          <Wrapper>
            <div id="software">
              <Link to="/Tablet">
                <img class="images" src={require("../IMG/tablet.jpg")} />
              </Link>
            </div>
          </Wrapper>
        </div>
        <div class="third">
          <Wrapper>
            <div id="games">
              <Link to="/Hardware">
                <img class="images" src={require("../IMG/hardware.jpg")} />
              </Link>
            </div>
          </Wrapper>
          {/* <Wrapper>
            <div id="tv">
              <Link to="/FAQ">
                <img class="images" src={require("../IMG/question.jpg")} />
              </Link>
            </div>
          </Wrapper> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
