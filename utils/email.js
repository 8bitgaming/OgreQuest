"use strict";
const nodemailer = require("nodemailer");


// async..await is not allowed in global scope, must use a wrapper
const mainEmail = async(email) => {

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'ogrequestgame@gmail.com',
            pass: process.env.EMAILER_PW
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"OgreQuest Admin 👻" <ogrequestgame@gmail.com>', // sender address
        to: `${email}`, // list of receivers
        subject: "Welcome to OgreQuest ✔", // Subject line
        text: "Welcome to OgreQuest!", // plain text body
        html: "<b>Welcome to OgreQuest!</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}


module.exports = {mainEmail}