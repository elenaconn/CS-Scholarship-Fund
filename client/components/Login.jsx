import React, { Component } from 'react';
// const bcrypt = require('bcrypt');
// const saltRounds = 10;

class Login extends Component{
  // constructor(props){
  //   super();

  // }

  render(){

    return (<div><h1>Login Component</h1></div>);
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