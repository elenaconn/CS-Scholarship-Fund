import React from 'react';
import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';




const Donation = (props) => {
        // calculate the individual total
        console.log('User donations >>> ', props.state.user_donations);
        const userTotalDonation = props.state.user_donations.reduce((acc, curr) => {
          return acc + curr.amount;
        }, 0);

        return (
          <div>      

            <h2>Individual Donation: ${userTotalDonation} </h2>
          
            <div className = "form">
  
             <label>Donation Amount:</label>
             <input type="text" id="amount" onChange={props.onDonate}/>
            
             <label>Credit Card:</label>
             <input type="text" id="credit_card" onChange={props.onDonate}/>
              
             <button onClick={props.postToDB}>Submit</button>
          
            </div>
          
          </div>
  
        );
};

export default Donation;
