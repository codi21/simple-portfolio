const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    console.log('llegue aca');
});

module.exports = app;
