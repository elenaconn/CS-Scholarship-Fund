/**
 * 
 * donationController object holds the methods to make sql queries re: donations
 * 
 */

const db = require("../models/databaseModel");

const donationController = {};

donationController.getDonations = (req, res, next) => {
  const allDonations = 'SELECT sum(amount) FROM donations';
  db.query(allDonations)
    .then((data) => {
      res.locals.donations = data.rows[0].sum;
      console.log('this is res.locals:', res.locals.donations);
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Error in getDonations middleware',
        status: 500,
        message: {err},
      });
    }); 
};

donationController.makeDonation = (req, res, next) => {
  const { amount, user_id, credit_card } = req.body
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const dateString = `${year}-${month}-${day}`;
  const addDonation = `INSERT INTO donations (amount, user_id, credit_card, date) VALUES(${amount}, ${user_id}, ${credit_card}, '${dateString}') RETURNING *`
  db.query(addDonation)
    .then((data) => {
      res.locals.insertedRow = data.rows[0];
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Error in makeDonation middleware',
        status: 500,
        message: {err},
      });
    })
};
 

module.exports = donationController;









/* // destructor request body
  const { donations, members } = req.body

  // test if request would like to add user
  if (members) {
    const { user_name, password } = members;
    const inputUser = "INSERT INTO users (user_name, password) VALUES ($1, $2) RETURNING *";
    // query DB passing in user_name and password as variables and storing in res.locals
    db.query(inputUser,[user_name, password])
      .then((data) => res.locals.user = data.rows)
      .catch((err) => next(err))
  }

  // post donation to DB
  const {nameInput, donationAmount, creditCard, phone, date, email} = donations
  const inputDonation = "INSERT INTO donations (nameInput, donationAmount, creditCard, phone, date, email) VALUES ()"
} */