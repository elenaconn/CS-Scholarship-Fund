import React from 'react';
import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import '../styles/styles.css';


class Donation extends Component {

    
    render() {

        return (
          <div className="container">
            <div className = "form">
 
              <label>Donation Amount:</label>
              <input type="text" id="donationAmount" />
              <label>Credit Card:</label>
              <input type="text" id="creditCard"/>


              <label><input type="checkbox"/>Would you like to become a member?</label>
              

                
              <button onClick={this.handleClick}>Submit</button>

            </div>
          </div>
        )

    }
};

export default Donation