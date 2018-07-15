import React, { Component } from 'react';
import './App.css';
import {Provider} from "react-redux"
import store from "./redux/store"
import {HashRouter as Router} from "react-router-dom"
import routes from "./routes";
// import banner from "./components/img/banner.jpg"
import Items from "./components/items/items"
import Footer from "./components/footer/footer"
import Navbar from "./components/Navbar/Navbar"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div className="App">
      <Navbar/>
      <img
              className="img" alt="banner"
              src={require("./components/IMG/banner.jpg")}
            />
            {routes}
           <Footer/>
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
