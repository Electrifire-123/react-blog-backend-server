const express  = require('express');

const allData = require('../detail/bollydetails');

const bollywood = express.Router();

bollywood.route('/bollywood')
.get(allData.apiController)
module.exports = bollywood;