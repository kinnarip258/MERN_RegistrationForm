const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../db/conn');
const User = require('../models/userSchema');

//get users
router.get('/getUsers', async (req,res) => {
    try{
        const users = await User.find()
        res.send((users));
    }
    catch(err) {
        console.log("error: ", err)
        res.send("error" + err);
    }
});

//register route
router.post('/signUp', async (req,res) => {

    const {fname, lname, email, password, cpassword} = req.body;

    if(!fname || !lname || !email || !password || !cpassword){
        return res.status(422 ).send({error: "please fill the field properly"});
    }
    try{

        const userExist = await User.findOne({email: email});

        if(userExist) {
            return res.status(422).send({error: "email already exist!"});
        } 
        else if(password !== cpassword){
            return res.status(422).send({ error: "password are not matching!"});
        } 
        else{
            const user = new User({fname, lname, email, password, cpassword});

            //save the user
            await user.save();
            
            res.status(201).send({ message: "User sucessfully register."});  
        }
        
    } 
    catch (err) {
        console.log(err);
    }
    
})

//login route

router.post('/signIn', async (req,res) => {
   try{
        let token;
        const { email, password } = req.body;

        if(!email || !password) {
            return res.status(400).send({ error: "please filled the data field!"});
        }

        const userLogin = await User.findOne({ email: email});

        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();

            //store the token in cookie
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            if(!isMatch){
                res.status(400).send({ error: "Invalid Credientials!"});
            }
            else {
                res.send({message: "user SignIn sucessfully!"});
            }
        }
        else{
            res.status(400).send({ error: "Invalid Credientials!"});
        }      
   } catch (err) {
    console.log(err);
   }
})

//get user
router.get('/editUser/:id',async (req,res) => {
    
    try{
        const user = await User.findById(req.params.id)
        console.log("get request for a emp", user);
        res.send(user)
    }
    catch(err) {
        console.log("error: ", err)
        res.send("error" + err)
    };
});

//update user
router.put('/updateUser/:id', async (req,res) => {
   
    try{
        const user = await User.findById(req.params.id);
        user.fname = req.body.fname;
        user.lname = req.body.lname;
        user.email= req.body.email;
        user.password = req.body.password;
        user.cpassword = req.body.cpassword;
        
        const e1 = await user.save();
        res.send((e1));
    }
    catch(err) {
        console.log("error: ", err)
        res.send("error" + err)
    };
});

//delete user
router.delete('/deleteUser/:id',async (req,res) => {
    
    try{
        const user = await User.findById(req.params.id).remove();
        res.send(user)
    }
    catch(err) {
        console.log("error: ", err)
        res.send("error" + err)
    };
});


module.exports = router;