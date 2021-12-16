const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../db/conn');
const User = require('../models/userSchema');

router.get('/', (req,res) => {
    res.send("Hello World from the server router.js");
});

//using promises
// router.post('/register', (req,res) => {

//     const {Fname, Lname, Email, Password, CPassword} = req.body;

//     if(!Fname || !Lname || !Email || !Password || !CPassword){
//         return res.status(422 ).json({error: "please fill the field properly"});
//     }

//     User.findOne({Email: Email})
//         .then(userExist => {
//             if(userExist) {
//                 return res.status(422).json({error: "Email already exist!"});
//             }  
        
//             const user = new User({Fname, Lname, Email, Password, CPassword});
//             user.save()
//                 .then(() => {
//                     res.status(201).json({ message: "User sucessfully register."})
//                 })
//                 .catch((err) => re.status(500).json({error: "Failed to Register"}));
//         })
//         .catch(err => {console.log(err)}); 
// })


//register route
//using async await
router.post('/register', async (req,res) => {

    const {Fname, Lname, Email, Password, CPassword} = req.body;

    if(!Fname || !Lname || !Email || !Password || !CPassword){
        return res.status(422 ).json({error: "please fill the field properly"});
    }
    try{

        const userExist = await User.findOne({Email: Email});

        if(userExist) {
            return res.status(422).json({error: "Email already exist!"});
        } 
        else if(Password !== CPassword){
            return res.status(422).json({ error: "password are not matching!"});
        } 
        else{
            const user = new User({Fname, Lname, Email, Password, CPassword, Image});

            //hashing password  
            await user.save();
            
            res.status(201).json({ message: "User sucessfully register."});  
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
        const { Email, Password } = req.body;

        if(!Email || !Password) {
            return res.status(400).json({ error: "please filled the data field!"});
        }

        const userLogin = await User.findOne({ Email: Email});

        if(userLogin){
            const isMatch = await bcrypt.compare(Password, userLogin.Password);

            token = await userLogin.generateAuthToken();

            //store the token in cookie
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            if(!isMatch){
                res.status(400).json({ error: "Invalid Credientials!"});
            }
            else {
                res.json({message: "user SignIn sucessfully!"});
            }
        }
        else{
            res.status(400).json({ error: "Invalid Credientials!"});
        }      
   } catch (err) {
    console.log(err);
   }
})

module.exports = router;