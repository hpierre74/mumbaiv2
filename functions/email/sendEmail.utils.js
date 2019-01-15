const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const sendEmail = body => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: functions.config().gmail.adress,
      pass: functions.config().gmail.password,
    },
  });
  const { object, content, to } = body;
  // setup email data with unicode symbols
  const mailOptions = {
    from: `mumbaicafelyon@gmail.com`,
    to: to || `pierrehuyghe.pro@gmail.com`,
    subject: object,
    html: content,
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (err, info) => {
    /* eslint-disable no-console */
    if (err) console.log(err);
    else console.log(info);
  });
};

module.exports = sendEmail;
