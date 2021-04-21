import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FirstPage from "./components/FirstPage";
import Navbar from "./components/Navbar";
import SecondPage from "./components/SecondPage";
import TopPanel from "./components/TopPanel";

const App = () => {
  return (
    <Router>
      <Navbar />
      <TopPanel />
      <Switch>
        <Route exact path="/" component={FirstPage} />
        <Route path="/second" component={SecondPage} />
      </Switch>
    </Router>
  );
};

export default App;
