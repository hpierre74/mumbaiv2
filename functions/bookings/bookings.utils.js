const functions = require('firebase-functions');
const { decryptHash } = require('../utils/encrypt.utils');
const admin = require('../admin');

const decryptBooking = encryptedBooking => {
  const key = functions.config().message.key;
  return {
    ...encryptedBooking,
    email: decryptHash(encryptedBooking.email, key),
    tel: decryptHash(encryptedBooking.tel, key),
    firstname: decryptHash(encryptedBooking.firstname, key),
    lastname: decryptHash(encryptedBooking.lastname, key),
  };
};

const hasUserAlreadyBookToday = async currentBooking => {
  try {
    const bookings = await admin
      .database()
      .ref(`/booker/bookings`)
      .once('value', snap => snap.val());

    if (!bookings.val()) {
      return false;
    }

    const samePersonBooking = Object.values(bookings.val()).filter(filteredBooking => {
      const booking = decryptBooking(filteredBooking);
      const sameDate = new Date(booking.timestamp).getDate() === new Date(currentBooking.timestamp).getDate();
      const sameEmail = booking.email === currentBooking.email;
      const sameTel = booking.tel === currentBooking.tel;
      if (sameDate) {
        if (sameEmail || sameTel) {
          return true;
        }
      }

      return false;
    });

    return samePersonBooking.length > 0;
  } catch (err) {
    /* eslint-disable-next-line no-console */
    console.log(err);

    return true;
  }
};

module.exports = { hasUserAlreadyBookToday, decryptBooking };
