/**
 * 
 * This router handles everything at the /donation endpoint
 * 
 */

const express = require('express');
const donationRouter = express.Router();

const donationController = require('../controllers/donationController.js');

// handles GET requests to localhost:3000/donation/total
donationRouter.get('/total',
  donationController.getDonations, 
  (req,res) => {
    res.status(200).json({
      donations: res.locals.donations,
      status: 'Success getting total donations',
    });
})

// handles POST requests to localhost:3000/donation/
donationRouter.post('/',
  donationController.reqBodyChecker,
  donationController.makeDonation,
  (req, res) => {
    res.status(200).json({
      insertedRow: res.locals.insertedRow,
      status: 'Success inserting donation row',
    })
})

module.exports = donationRouter;