import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar.com";
import Home from "./pages/homePage";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
