import React from 'react'
import { Switch, Router, Route } from 'react-router';
import Navbar from './Components/Navbar';
import PhotoAlbum from './Components/PhotoAlbum';
import SecondPhotoAlbum from './Components/SecondPhotoAlbum';
import { createBrowserHistory } from "history";


const history = createBrowserHistory();

const App = () => {
  return (
    <div>
    <Navbar />

    <Router history={history}>
      <Switch>
        <Route exact path="/" component={PhotoAlbum}/>
        <Route path="/second" component={SecondPhotoAlbum}/>
        <Route />
      </Switch>
    </Router>
    </div>    
  );
}

export default App;
