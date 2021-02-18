/*
 * 
 * This router handles everything at the /location endpoint
 * 
 */

const express = require('express');
const router = express.Router();

const locationController = require('../controllers/locationController.js');

// handles GET requests to localhost:3000/donation/total
router.get('/',
  locationController.getlocations,
  (req,res) => {
    res.status(200).json({
      locations: res.locals.locations,

      status: 'Success getting locations',
    });
})

module.exports = router;