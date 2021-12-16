const express = require('express');
const dotenv = require("dotenv");
const app = express();

//config file path
dotenv.config({path: './config.env'});
//database connection path
require('./db/conn');
app.use(express.json());

//link the router file
app.use(require('./router/auth'));


//port of the server
const PORT = process.env.PORT;

// //middleware
// const middleware = (req,res, next) => {
//     console.log('hello middleware');
//     next();
// }


app.listen(PORT, () => {
    console.log(`server is running in port ${PORT}`);
});