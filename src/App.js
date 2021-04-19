import React from 'react'
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from "react-router-dom";
import FirstPage from './Components/FirstPage';
import Navbar from './Components/Navbar';
import SecondPage from './Components/SecondPage';
import TopPanel from './Components/TopPanel';


const App = () => {
  return (
    <div>
      <Navbar />
      <TopPanel />
      <Router>
        <Switch>
          <Route exact path="/" component={FirstPage}/>
          <Route path="/second" component={SecondPage}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
