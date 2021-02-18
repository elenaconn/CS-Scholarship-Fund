/*
 *
 * userController object holds the methods to make sql queries re: users
 *
 */
const db = require("../models/databaseModel");
const bcrypt = require('bcrypt');
const userController = {};

userController.create = async (req,res,next) => {
  const {username,password,firstname,lastname,phone_num,email} = req.body;
  // hash password using bcrypt, 10 rounds
  let hashedPassword = await bcrypt.hash(password,10);

  let str = 'username,password,firstname,lastname'
  let valStr = `'${username}','${hashedPassword}','${firstname}','${lastname}'`

  if (phone_num) {
    str += ', phone_num';
    valStr += `,'${phone_num}'`;
  }
  if (email) {
    str += ', email';
    valStr += `,'${email}'`;
  }
  
  const createUser = `INSERT INTO users(${str}) VALUES(${valStr}) RETURNING *`
  db.query(createUser) 
   .then((data) => {
     res.locals.insertedRow = data.rows[0];
     return next()
   })
   .catch((err) => {
     return next({
        log: 'Error in userController.create',
        status: 500,
        message: {err},
     })
   });
}

//things that could be doable: update password and username, delete user

module.exports = userController;