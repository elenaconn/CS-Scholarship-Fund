import React from 'react';
import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';




class Donation extends Component {
      render() {
        return (
          <div>      
            <h1>Individual Donation: {this.props.state.individualTotal} </h1>
          
           <div className = "form">
  
             <label>Donation Amount:</label>
             <input type="text" id="amount" onChange={this.props.onDonate}/>
            
             <label>Credit Card:</label>
             <input type="text" id="credit_card" onChange={this.props.onDonate}/>
              
             <button onClick={this.props.postToDB}>Submit</button>
          
          </div>
          
          </div>
  
        );
      }
};

export default Donation;
