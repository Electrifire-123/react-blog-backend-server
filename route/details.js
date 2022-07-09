const express  = require('express');

const allData = require('../detail/node');

const detials = express.Router();

detials.route('/api')
.get(allData.apiController)
module.exports = detials;