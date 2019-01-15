const validateSchema = require('../utils/validate.utils');
const bookingSchema = require('../schemas/booking.schema');
const { decryptBooking, hasUserAlreadyBookToday } = require('./bookings.utils');
const admin = require('../admin');

const addBooking = async data => {
  try {
    const booking = data;

    const decryptedBooking = decryptBooking(booking);

    await validateSchema(decryptedBooking, bookingSchema);

    if (await hasUserAlreadyBookToday(decryptedBooking)) {
      return false;
    }

    await admin
      .database()
      .ref(`/booker/bookings/${booking.id}`)
      .set(booking);

    return true;
  } catch (err) {
    /* eslint-disable-next-line no-console */
    console.error(err);

    return false;
  }
};

module.exports = addBooking;
