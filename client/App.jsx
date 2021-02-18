import React, { Component } from 'react';
import Login from './components/Login';
import Donation from './components/Donation';

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

    componentDidMount() {
        console.log("inside component did mount")
        fetch('/getDonations')
          .then(res => res.json())
          .then((totals) => {
              console.log('totals: ',totals)
              const totalRaised = totals;
              return this.setState({
                  ...this.state,
                  totalRaised : totals
              })
          })
          .catch(err => console.log('get project: ERROR: ', err));
        }
    
render() {

  return (
    <Router>
      <div>
        <div className="main">
            <h1>Codesmith Alumni Scholarship</h1>
            <p>info about scholarship info about scholarship info about scholarship info about scholarship info about scholarship info about scholarship</p>   
            <h3 id="totalHomePage">Total Raised ${this.state.totalRaised}</h3>
        </div>
        
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


{/* <div className="btn">
    <button id="donateHome"> Donate </button>
    <button id="applyHome">Apply</button>  
</div> */}
