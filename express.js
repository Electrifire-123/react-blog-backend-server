const express = require("express");
const data = require('./route/details');
const cors = require('cors');
const app = express();
app.use(cors());
app.use('/home', data)
app.get('/',(req,res)=>{
    res.send('Backend Server')
})

app.listen(process.env.PORT||8000,()=> console.log('app is running on port 5000'));