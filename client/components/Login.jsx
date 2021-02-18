import React, { Component } from 'react';
import '../styles.css';
import { Link, Redirect } from "react-router-dom";

class Login extends Component {


  render(){
    if (this.props.state.user_id !== null) {
      return <Redirect to = '/donation'/>;
    }
    
    return (
    <div>
      <h1>Login Component</h1>
      <div className = "form">

          <label>Username:</label>
          <input type="text" id="username" onChange={this.props.editLogin}/>
           
          <label>Password:</label>
          <input type="password" id="password" onChange={this.props.editLogin}/>
            
          <button onClick={this.props.logInToDB}>Login</button>
          <button>Sign in with Google</button>
          <button>Register An Account</button>

      </div>
    
    </div>
    );
  }

}


export default Login;