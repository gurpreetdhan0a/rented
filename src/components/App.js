import React from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import MainPage from './MainPage';
import Navigation from './Navigation';
import '../App.css';
import AllPorperties from './AllProperties';
import PropertyDetail from './PropertyDetail';
import ApplicationForm from './ApplicationForm';
import ApplicationSubmitted from './ApplicationSubmitted';
import NotFound from './NotFound';

const App = () =>{
  return (
    <div className="ui">
      <Router>
        <Navigation/>
        <Switch>
        <Route path="/" exact component ={MainPage}/>
        <Route path="/allProperties" exact component ={AllPorperties}/>
        <Route path="/property/:id" exact component={PropertyDetail}/>
        <Route path="/applicationForm" exact component={ApplicationForm}/>
        <Route path="/applicationSubmitted" exact component={ApplicationSubmitted}/>
        <Route component={NotFound}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
