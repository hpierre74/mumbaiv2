const functions = require('firebase-functions');

const sanitizeBooking = booking => {
  
};
module.exports = sanitizeBooking;
functions.database.ref('booker/bookings').onWrite()