const express  = require('express');

const allData = require('../detail/fitnessdetails');

const fitness = express.Router();

fitness.route('/fitness')
.get(allData.apiController)
module.exports = fitness;