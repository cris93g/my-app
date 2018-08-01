import React from "react";
import { Switch, Route } from "react-router-dom";
import Items from "./components/items/items";
import Cart from "./components/cart/cart";
import Home from "./components/home/Home";

import Desktop from "./components/Desktop/Desktop";
import Laptop from "./components/Laptop/Laptop";
import Hardware from "./components/Hardware/Hardware";
import Acessory from "./components/Acessory/Acessory";
import Tablet from "./components/Tablet/Tablet";
import Orders from "./components/Orders/Orders";
import AboutMe from "./components/AboutMe/AboutMe";
import Faq from "./components/FAQ/faq";
import Login from "./components/login/Login";

import FrontPage from "./components/frontPage/FrontPage";

export default (
  <Switch>
    <Route component={Login} exact path="/" />
    <Route component={Home} path="/home" />
    <Route component={FrontPage} path="/frontpage" />
    {/* <Route path="*" render={() => <div>404 NOT TODAY</div>} /> */}
    <Route component={Faq} path="/FAQ" />
    <Route component={AboutMe} path="/AboutMe" />
    <Route component={Orders} path="/Orders" />
    <Route component={Desktop} path="/Desktop" />
    <Route component={Laptop} path="/Laptop" />
    <Route component={Hardware} path="/Hardware" />
    <Route component={Acessory} path="/acessory" />
    <Route component={Tablet} path="/Tablet" />

    <Route component={Items} path="/All" />

    <Route component={Cart} path="/Cart" />
  </Switch>
);
