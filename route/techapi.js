const express  = require('express');

const allData = require('../detail/techdetails');

const technology = express.Router();

technology.route('/technology')
.get(allData.apiController)
module.exports = technology;