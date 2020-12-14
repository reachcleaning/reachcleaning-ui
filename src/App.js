import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home/Home';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Contact from './Contact/Contact';
import ClinicalCleaning from './ClinicalCleaning/ClinicalCleaning';
import DeepCleaning from './DeepCleaning/DeepCleaning';
import OfficeCleaning from './OfficeCleaning/OfficeCleaning';
import WallCleaning from './WallCleaning/WallCleaning';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';
import AboutUs from './AboutUs/AboutUs';
import WhyChooseUsScreen from './WhyChooseUsScreen/WhyChooseUsScreen';
import QualityOfServices from './QualityOfServices/QualityOfServices';
import OurServices from './OurServices/OurServices';

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
          <WallCleaning />
        </Route>
        <Route exact path="/PrivacyPolicy">
          <PrivacyPolicy />
        </Route>
        <Route exact path="/aboutus">
          <AboutUs />
        </Route>
        <Route exact path="/whychooseus">
          <WhyChooseUsScreen />
        </Route>
        <Route exact path="/qualityofservices">
          <QualityOfServices />
        </Route>
        <Route exact path="/services">
          <OurServices />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
