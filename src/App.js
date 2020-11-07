import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppBody, AppComponent } from "./AppStyles";
import NavBar from "./components/NavBar/Index";
import TopNav from "./components/TopNav/Index";
import Home from "./Pages/Index";
import SignInPage from "./Pages/SignInPage";

function App() {
  return (
    <Router>
      <AppComponent lightBg={false}>
        <NavBar />
        <TopNav />
        <AppBody>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/sign-in" component={SignInPage} exact />
          </Switch>
        </AppBody>
      </AppComponent>
    </Router>
  );
}

export default App;
