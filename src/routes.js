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
    <Route component={Desktop}  path="/Desktop" />
    <Route component={Laptop}  path="/Laptop" />
    <Route component={Hardware}  path="/Hardware" />
    <Route component={Acessory} path="/acessory" />
    <Route component={Tablet}  path="/Tablet" />
    <Route component={Home} exact path="/" />
    <Route component={Items} path="/All" />
    <Route component={Profile}  path="/Profile" />
    <Route component={Cart} path="/Cart" />
  </Switch>
);
