const express  = require('express');

const allData = require('../detail/hollydetails');

const hollywood = express.Router();

hollywood.route('/hollywood')
.get(allData.apiController)
module.exports = hollywood;