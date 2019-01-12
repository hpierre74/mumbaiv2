const functions = require('firebase-functions');
const sendEmail = require('./mail.function');

exports.sendMail = functions.https.onRequest((request, response) => sendEmail(request, response));
