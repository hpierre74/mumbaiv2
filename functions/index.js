const functions = require('firebase-functions');

// Emails
const sendEmailFromHttp = require('./email/sendEmailFromHttp.function');
// const sendEmailForBooking = require('./email/sendEmailForBooking.function');

// ThirdParties
const getInstaFeed = require('./thirdParties/instagram.function');

// Bookings
const deleteBookings = require('./bookings/deleteBookings.function');
const cancelBooking = require('./bookings/cancelBooking.function');

const addBooking = require('./bookings/addBooking.function');

// exports.filterBooking = functions.database.ref('booker/bookings/{bookingId}').onWrite(snap => filterBooking(snap));
exports.sendEmailFromHttp = functions.https.onRequest((request, response) => sendEmailFromHttp(request, response));

exports.getInstagramFeed = functions.https.onRequest((request, response) => getInstaFeed(request, response));

exports.deleteOldBookings = functions.https.onRequest((request, response) => deleteBookings(request, response));
exports.cancelBooking = functions.https.onRequest((request, response) => cancelBooking(request, response));
// exports.onCreateBooking = functions.database.ref('booker/bookings/{id}').onWrite(sendEmailForBooking);

exports.addBooking = functions.https.onCall((data, context) => addBooking(data, context));
