const express = require("express");
const data = require('./route/details');
const bollywood = require('./route/bollyapi');
const hollywood = require('./route/hollyapi');
const technology = require('./route/techapi');
const fitness = require('./route/fitnessapi');
const food = require('./route/foodapi');
const cors = require('cors');
const app = express();
app.use(cors());
app.use('/blogdata', data)
app.use('/blogdata', bollywood)
app.use('/blogdata', hollywood)
app.use('/blogdata', technology)
app.use('/blogdata', fitness)
app.use('/blogdata', food)
app.get('/',(req,res)=>{
    res.send('Backend Server')
})

app.listen(process.env.PORT||8000,()=> console.log('app is running on port 5000'));