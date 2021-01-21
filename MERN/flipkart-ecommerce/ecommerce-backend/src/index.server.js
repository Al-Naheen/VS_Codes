const express = require('express');
const env = require('dotenv');

const app = express()

// environment variable or constants
env.config()

app.listen(process.env.PORT, ()=>{
    console.log(`Hello World ${process.env.PORT}`);
})
