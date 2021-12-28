const express = require('express');
const dotenv = require("dotenv");
const app = express();

//config file path
dotenv.config({path: './config.env'});

//database connection path
require('./db/conn');

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
    "GET, POST,PUT, DELETE, OPTIONS")
    next();
})

app.use(express.json());

//link the router file
app.use(require('./router/auth'));


//port of the server
const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`server is running in port ${PORT}`);
});