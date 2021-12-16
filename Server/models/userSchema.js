const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    Fname: {
        type: String,
        required: true
    },
    Lname: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    CPassword: {
        type: String,
        required: true  
    },
    Tokens: [
        {
            token: {
                type: String,
                required: true  
            }
        }
    ]
});

//hasing the password
userSchema.pre('save', async function(next) {
    if(this.isModified('Password')) {
        this.Password = await bcrypt.hash(this.Password, 12);
        this.CPassword = await bcrypt.hash(this.CPassword, 12);
    }
    next();
});

//generating token
userSchema.methods.generateAuthToken = async function() {
    try{
        let token = jwt.sign({_id: this._id}, process.env.SECRET_KEY);
        this.Tokens = this.Tokens.concat({ token: token});

        await this.save();
        return token;
    }
    catch (err) {
        console.log(err);
    }
}

//model for users collection
const User = mongoose.model('User', userSchema);

module.exports = User;

