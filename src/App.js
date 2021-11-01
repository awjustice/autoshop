import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import BurgerMenu from "./components/BurgerMenu.js";
import Home from "./components/Home.js";
import Footer from "./components/Footer.js";
import About from "./components/About.js";
import Services from "./components/Services.js";
import Contact from "./components/Contact.js";

const App = () => {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <BurgerMenu />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/services" component={Services}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
