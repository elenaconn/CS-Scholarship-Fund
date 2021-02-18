import React, { Component } from 'react';
import Login from './components/Login';
import Donation from './components/Donation';

import DemoMap from "./map/components/DemoMap";
import { cities } from "./map/components/utils/Utils"
import 'leaflet/dist/leaflet.css';
import './styles.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


class App extends Component{
    constructor(props) {
      super(props);
      this.state = {
        // nameInput : '', 
        // donationAmount : '', 
        // phone : '', 
        // date: '', 
        // email: '',
        // username: '',
        // password: '',
        // totalRaised: '',
      
        creditCard : '1234', 
        amount: 0,
        userId: 0
      };
    // this.onDonate = this.onDonate.bind(this);
    }

    
  render() {

  return (
    <Router>
      <div>
        <DemoMap/>
        <Switch>
          <Route
            exact path= "/a"
            render = {props => <Login {...props}  state = {this.state}/>}
          />
          <Route
            exact path= "/"
            render = {props => <Donation {...props} />}
          />
        </Switch>
      </div>
    </Router>
  )
}

  };

export default App;


