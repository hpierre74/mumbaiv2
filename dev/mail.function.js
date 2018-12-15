const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: 'http://localhost:3000' });

const sendEmail = (request, response) =>
  cors(request, response, () => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: functions.config().gmail.adress,
        pass: functions.config().gmail.password,
      },
    });
    const {
      body: { firstname, lastname, email: from, object, content, to },
    } = request;
    // setup email data with unicode symbols
    const mailOptions = {
      from: `mumbaicafelyon@gmail.com`,
      to: to || `1mumbaicafe@gmail.com`,
      subject: `DEMANDE CLIENT : ${object}`,
      html: `
        <h4>${firstname} ${lastname} vous a envoyé un message :</h4>
        <p>${content}</p>
        Répondre : ${from}
      `,
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (err, info) => {
      /* eslint-disable no-console */
      if (err) console.log(err);
      else console.log(info, request);
    });

    return response.status(200).send('Mail sent');
  });
module.exports = sendEmail;
