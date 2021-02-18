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
        <div >

      
          <h1>Individual Donation: {this.props.state.individualTotal} </h1>
        
        <div className = "form">

          <label>Donation Amount:</label>
          <input type="text" id="amount" onChange={this.props.onDonate}/>
          
          <label>Credit Card:</label>
          <input type="text" id="credit_card" onChange={this.props.onDonate}/>
            
          <button onClick={this.props.postToDB}>Submit</button>
        </div>
        
        </div>


      )

    }
};

export default Donation;


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
