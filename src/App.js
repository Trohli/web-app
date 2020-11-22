import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Index";
import Navbar from "./Components/NavBar/Index";
import Home from "./Pages/Index";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
