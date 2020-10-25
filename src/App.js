import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home/Home';
import Header from './Header/Header';
import Contact from './Contact/Contact';


function App() {
  return (
    <Router>
      <Header/>
      <Switch>  
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
