const mongoose = require('mongoose');
const DB = process.env.DATABASE;

//connection with database
mongoose.connect(DB)
 .then(res => console.log('db connected'))
 .catch(err => console.log(err));