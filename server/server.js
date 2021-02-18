const express = require('express');
const { get } = require('http');
const path = require('path');
const PORT = 3000;
const app = express();
<<<<<<< HEAD

const donationController = require('./controllers/donationController.js')
=======
>>>>>>> ee12d9cbbe867eb2ed392b3e2ba438714f956fea

// parsing request body in JSON format
app.use(express.json());
// parsing request body in urlencoded format
app.use(express.urlencoded({ extended: true }));

app.use('/build', express.static(path.resolve(__dirname , '../build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

<<<<<<< HEAD
app.get("/getDonations", donationController.getDonations,  (req,res) => {
  res.status(200).json(res.locals.donations);
})

app.post("/makeDonation", donationController.makeDonation, (req, res) => {
  res.sendStatus(200);
})
=======
/**
 * route handlers
 */
const donationRouter = require('./routes/donationRoutes');
const userRouter = require('./routes/userRoutes');

app.use('/donation', donationRouter);
<<<<<<< HEAD
>>>>>>> ee12d9cbbe867eb2ed392b3e2ba438714f956fea
=======
app.use('/user', userRouter);
>>>>>>> 4c162420d070e1e74d8bf62a024ebeb342bc44c8

app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`); });

module.exports = app;