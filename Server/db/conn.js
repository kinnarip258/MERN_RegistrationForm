const mongoose = require('mongoose');
//get the connection request from config.env
const DB = process.env.DATABASE;

//connection with database
mongoose.connect(DB)
 .then(res => console.log('db connected'))
 .catch(err => console.log(err));