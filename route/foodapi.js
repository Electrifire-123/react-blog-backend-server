const express  = require('express');

const allData = require('../detail/fooddetails');

const food = express.Router();

food.route('/food')
.get(allData.apiController)
module.exports = food;