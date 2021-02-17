import React from 'react';
import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../styles.css';


class Donation extends Component {
  
    // }
    render() {
        // POST request for donation only needs to send 
        // {
        //   userId: '',
        //   credit_card: '',
        //   amount: 100.0
        // }

      return (
        <div className = "form">
          {/* <label>Name:</label>
          <input type="text" id="nameInput"/>*/}


          {/*<label>Credit Card:</label>
            <input type="text" id="creditCard"/>
          <label>Phone:</label>
          <input type="text" id="phone"/>
          <label>Today's Date:</label>
          <input type="text" id="date" />
          <label>Email:</label>
          <input type="text" id="email" /> */}

          <label>Donation Amount:</label>
          <input type="text" id="donationAmount" onChange={this.props.donationFunc}/>
          

          <label>Would you like to become a member?</label>
          <input type="checkbox"/>
            
          <button onClick={this.props.donationFunc}>Submit</button>
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
