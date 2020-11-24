import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home/Home';
import Header from './Header/Header';
import Contact from './Contact/Contact';
import ClinicalCleaning from './ClinicalCleaning/ClinicalCleaning';
import DeepCleaning from './DeepCleaning/DeepCleaning';
import OfficeCleaning from './OfficeCleaning/OfficeCleaning';

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
        <Route exact path="/ClinicalCleaning">
          <ClinicalCleaning />
        </Route>
        <Route exact path="/DeepCleaning">
          <DeepCleaning />
        </Route>
        <Route exact path="/OfficeCleaning">
          <OfficeCleaning />
        </Route>
        <Route exact path="/WallCleaning">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
