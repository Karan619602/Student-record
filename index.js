const express=require('express')
const app=express();
 const connectdatabase  = require('./config/database.js')
 
 const {config} =require('dotenv')
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* env variables */
config({path:'config/config.env'})


/* connecting database */
connectdatabase();

/* middlewares */
const student =require('./routes/studentroutes.js')
app.use('/api',student)

const port =process.env.PORT|| 4000
/* express server */
app.listen(port,(err)=>{
    console.log(`server running on port:${port}`);
})