import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer/Index";
import { AppBody } from "./Components/GenComponent";
import Header from "./Components/Header/Index";
import CheckoutPage from "./Pages/CheckoutPage";
import DashBoardPage from "./Pages/DashBoardPage";
import StoresPage from "./Pages/StoresPage";
import Home from "./Pages/Index";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ openNav }, dispatch] = useStateValue();
  const ToggleNav = () => {
    openNav &&
      dispatch({
        type: "TOGGEL_NAV",
        navState: false,
      });
  };
  return (
    <>
      <Router>
        <AppBody onClick={ToggleNav}>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/stores" component={StoresPage} />
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
