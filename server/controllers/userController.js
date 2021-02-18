/*
 *
 * userController object holds the methods to make sql queries re: users
 *  - we can log in, create an account, etc.
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

userController.login  = (req, res, next) => {
  const { username, password } = req.body;
  
  // query string to see if username/password combo is on our users table
  const query = `SELECT * FROM users WHERE username='${username}';`

  db.query(query)
    .then((data) => {
      // username found
      if (data.rows.length > 0) {
        // check password
        bcrypt.compare(password, data.rows[0].password, (err, isMatch) => {
          // if error -> error msg
          if (err) {
            return next({
              log: 'Error with password in userController.login',
              status: 500,
              message: {err},
            });
          }

          // if true -> log in and save user data on res.locals object
          if(isMatch){      
            res.locals.userInfo = data.rows[0];    
            return next();
          }
          // if false -> bad password
          if(!isMatch) {
            res.status(200).json({
              status: 'Incorrect password',
            })
          }
        })
      } else {
        res.status(200).json({
          status: 'Username not found',
        })
      }
    })
    .catch((err) => {
      return next({
        log: 'Error in userController.login',
        status: 500,
        message: {err},
      });
    })
}

// only reach this middleware if username/password is a match
userController.userHistory  = (req, res, next) => {
  const { username } = req.body;
  // query string to get all data re: user's past donations
  const query = `SELECT donations.* FROM users JOIN donations ON users._id=donations.user_id WHERE users.username='${username}'`
 
  db.query(query)
    .then((data) => {
      res.locals.userHistory = data.rows;
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Error in userController.userHistory',
        status: 500,
        message: {err},
      });
    })
}

//things that could be doable: update password and username, delete user

module.exports = userController;