/*
 *
 *
 *
*/
const db = require("../models/databaseModel");

const userController = {};

userController.create = (req,res,next) => {
  const {username,password,firstname,lastname,phone_num,email} = req.body;
  const createUser = `INSERT INTO users(username,password,firstname,lastname,phone_num,email) VALUES('${username}','${password}','${firstname}','${lastname}',${phone_num},'${email}') RETURNING *`
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