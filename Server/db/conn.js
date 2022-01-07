const mongoose = require('mongoose');

//get the connection request from config.env
const DB = process.env.DATABASECOMPASS;

//connection with database
mongoose.connect(DB)
 .then(() => console.log('db connected'))
 .catch(err => console.log(err));