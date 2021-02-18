import React from 'react';
import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../styles.css';


class Donation extends Component {
    constructor() {
        super();
        this.state = {
                nameInput : '', 
                donationAmount : '', 
                creditCard : '', 
                phone : '', 
                date: '', 
                email: '',
                username: '',
                password: '',
                totalRaised: ''
            }
            this.handleClick = this.handleClick.bind(this);
        }

    handleClick(event) {
        const donations = { nameInput : this.state.nameInput,
                            //nameInput : document.getElementById("nameInput").value,
                            donationAmount : this.state.donationAmount,
                            creditCard : this.state.creditCard, 
                            phone : this.state.phone, 
                            date : this.state.date, 
                            email: this.state.emai
                          };
        const members = { username : this.state.username , password : this.state.password };

        preventDefault(event);
        fetch('/donate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({donations, members})
        })

    }
    render() {

        return (
            <div className = "form">
                {/* <form> */}
                    <label>Name:</label>
                    <input type="text" id="nameInput"/>
                    <label>Donation Amount:</label>
                    <input type="text" id="donationAmount" />
                    <label>Credit Card:</label>
                    <input type="text" id="creditCard"/>
                    <label>Phone:</label>
                    <input type="text" id="phone"/>
                    <label>Today's Date:</label>
                    <input type="text" id="date" />
                    <label>Email:</label>
                    <input type="text" id="email" />

                    <label>Would you like to become a member?</label>
                    <input type="checkbox"/>

                    <input type="text" id="username" />
                      
                    <input type="text" id="password"/>
                      
                    <button onClick={this.handleClick}>Submit</button>
                {/* </form> */}
            </div>

        )

    }
};

export default Donation