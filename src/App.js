import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar.com";
import Home from "./pages/homePage";
import About from "./pages/aboutPage";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </>
  );
}

export default App;
