import React from "react";
import Carousel from "nuka-carousel";
import "./Slider.css";
export default class extends React.Component {
  render() {
    return (
      <Carousel>
        <img src="https://promotions.newegg.com/home/18-2129/1920x360.jpg" />
        <img src="https://promotions.newegg.com/asus/18-1564/1920x360.jpg" />
        <img src="https://promotions.newegg.com/amd/17-6965/1920x360.jpg" />
      </Carousel>
    );
  }
}
