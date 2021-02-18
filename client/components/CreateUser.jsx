import React, { useState } from 'react';

function Signup(){

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone_num, setPhone_num] = useState('');

function submitSignup(){
  const data = {username, password, firstname, lastname, email, phone_num}

fetch('/user', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(res => {
  console.log('Success:', res);
})
.catch((error) => {
  console.error('Error:', error);
});
}

  return (
    <div className = "form">
    <label>Username:</label>
    <input type="text" id="username" onChange = {(e) => setUsername(e.target.value)} />
    <label>Password:</label>
    <input type="text" id="password" onChange = {(e) => setPassword(e.target.value)} />
    <label>First Name:</label>
    <input type="text" id="firstName" onChange = {(e) => setFirstname(e.target.value)}/>
    <label>Last Name:</label>
    <input type="text" id="lastName" onChange = {(e) => setLastname(e.target.value)}/>
    <label>Email:</label>
    <input type="text" id="email" onChange = {(e) => setEmail(e.target.value)}/>
    <label>Phone Number:</label>
    <input type="text" id="phone_num" onChange = {(e) => setPhone_num(e.target.value)}/>
     <button onClick = {submitSignup}>Submit</button>
    </div>
  )
  
}






