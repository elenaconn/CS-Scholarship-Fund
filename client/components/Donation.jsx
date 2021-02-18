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


    // constructor() {
    //     super();
    //     this.state = {}
    // }

    // handleClick(event) {
    //     const donations = { nameInput : this.state.nameInput,
    //                         //nameInput : document.getElementById("nameInput").value,
    //                         donationAmount : this.state.donationAmount,
    //                         creditCard : this.state.creditCard, 
    //                         phone : this.state.phone, 
    //                         date : this.state.date, 
    //                         email: this.state.emai
    //                       };
    //     const members = { username : this.state.username , password : this.state.password };

    //     preventDefault(event);
    //     fetch('/donate', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({donations, members})
    //     })
