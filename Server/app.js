const express = require('express');
const dotenv = require("dotenv");
const app = express();
const cookieParser = require("cookie-parser");


//config file path
dotenv.config({path: './config.env'});

//database connection path
require('./db/conn');

app.use(express.json());

app.use(cookieParser());

//link the router file
app.use(require('./router/auth'));


//port of the server
const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`server is running in port ${PORT}`);
});