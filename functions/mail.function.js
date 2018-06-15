const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// Generate test SMTP service account from ethereal.email


exports.sendMail = functions.https.onRequest((request, response) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "mumbaicafelyon@gmail.com",
          pass: "precsfili74"
        },
      });
      
      // setup email data with unicode symbols
      let mailOptions = {
        from: '"Mumbai Café" <foo@example.com>',
        to: "pierrehuyghe.pro@gmail.com",
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>" // html body
      };
      
      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log("Message sent: %s", info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      
        return info;
      
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      });
 response.send("Hello from Firebase!");
});
