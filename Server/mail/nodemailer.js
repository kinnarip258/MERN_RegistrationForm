const nodemailer = require('nodemailer');


const sendMail = ({toUser, user}) => {

    //createTransport for mail
    const transport = nodemailer.createTransport(
        {
            service: 'Gmail',
            //authenticate user and password
            auth: {
                user: process.env.USER,
                pass: process.env.PASSWORD
            }
        }
    );

    //email message
    const Message = {
        from: process.env.USER,
        to: toUser,
        subject: `hello ${user.fname} ${user.lname}, using Nodejs`,
        html: `
            <h2>Thank You For Registering into our application.</h2>
            <h4>Your details: </h4>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <p>Profession: ${user.profession}</p>
            <p>Salary: ${user.salary}</p>
        `
    };
    
    //send the email
    transport.sendMail(Message, (error, info) => {
        if(error){
            console.log(error);
        }
        else{
            console.log("Email Send: " + info.response);
        }
    });

}

module.exports = sendMail;
