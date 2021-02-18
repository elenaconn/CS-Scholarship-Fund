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
      this.state = {};
    }

    
render() {

  return (
    <Router>
      <div>
        <DemoMap
          cities = {cities}
        />
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


