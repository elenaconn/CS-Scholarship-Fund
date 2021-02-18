/**
 * 
 * This router handles everything at the /user endpoint
 * 
 */

const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController.js');

// handle POST request to localhost:3000/user/
userRouter.post('/',
  userController.create,
  (req, res) => {
    res.status(200).json({
      newUser: res.locals.insertedRow,
      status: 'Success creating user row',
    })
  }
)

module.exports = userRouter;