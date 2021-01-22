import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer/Index";
import { AppBody } from "./Components/GenComponent";
import Header from "./Components/Header/Index";
import Navbar from "./Components/NavBar/Index";
import CheckoutPage from "./Pages/CheckoutPage";
import DashBoardPage from "./Pages/DashBoardPage";
import Home from "./Pages/Index";

function App() {
  return (
    <>
      <Router>
        <AppBody>
          <Navbar />
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/checkout" component={CheckoutPage} />
            <Route path="/dashboard" component={DashBoardPage} />
          </Switch>
          <Footer />
        </AppBody>
      </Router>
    </>
  );
}

export default App;
