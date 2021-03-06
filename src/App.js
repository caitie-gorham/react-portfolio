import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header/index';
import Footer from "./components/Footer/index";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <Router basename="/react-portfolio">
      <Header />
      <div className="container main-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact-react" component={Contact} />
          <Route exact path="/portfolio-react" component={Portfolio} />
        </Switch>
      </div>
      <Footer/>
    </Router>
  )
}


export default App;