const express=require("express");
const app=express();
require('dotenv').config();
app.listen(3000,()=>{
    console.log("The Server Started..........")
} )