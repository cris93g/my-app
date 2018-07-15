import React from "react";
import { Switch, Route } from "react-router-dom";
import Items from "./components/items/items";
import Cart from "./components/cart/cart";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import Desktop from "./components/Desktop/Desktop";
import Laptop from "./components/Laptop/Laptop";
import Hardware from "./components/Hardware/Hardware";
import Acessory from "./components/Acessory/Acessory";
import Tablet from "./components/Tablet/Tablet";
export default (
  <Switch>
    <Route component={Desktop} exact path="/Desktop" />
    <Route component={Laptop} exact path="/Laptop" />
    <Route component={Hardware} exact path="/Hardware" />
    <Route component={Acessory} exact path="/acessory" />
    <Route component={Tablet} exact path="/Tablet" />
    <Route component={Home} exact path="/Home" />
    <Route component={Items} path="/All" />
    <Route component={Profile} exact path="/Profile" />
    <Route component={Cart} path="/Cart" />
  </Switch>
);
