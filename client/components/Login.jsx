import React, { Component } from 'react';
// const bcrypt = require('bcrypt');
// const saltRounds = 10;
import { useForm } from "react-hook-form";
import '../styles.css';

class Login extends Component {


  render(){

    return (
    <div>
      <h1>Login Component</h1>
      <div className = "form">

          <label>Username:</label>
          <input type="text" id="username" onChange={this.props.onDonate}/>
           
          <label>Password:</label>
          <input type="text" id="password" onChange={this.props.onDonate}/>
            
          <button onClick={this.props.logInToDB}>Login</button>
          <button>Sign in with Google</button>
          <button>Register An Account</button>

      </div>
    
    </div>
    );
  }

}


// bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
//     // Store hash in your password DB.
// });

// // Load hash from your password DB.
// bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
//     // result == true
// });
// bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
//     // result == false
// });

export default Login;