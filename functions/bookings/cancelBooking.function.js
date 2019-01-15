const functions = require('firebase-functions');
const { decryptHash } = require('../utils/encrypt.utils');
const admin = require('../admin');
const app = require('../app');

const cancelUserBooking = async (request, response) => {
  try {
    const bookingId = request.body.bookingId;
    const userEmail = request.body.userEmail;

    const key = functions.config().message.key;

    const storedEmail = await admin
      .database()
      .ref(`/booker/bookings/${bookingId}/email`)
      .once('value', snap => snap.val());

    const decryptedStoredEmail = decryptHash(storedEmail.val(), key);

    if (userEmail !== decryptedStoredEmail) {
      return response.status(403).send();
    }

    await admin
      .database()
      .ref(`/booker/bookings/${bookingId}`)
      .set(null);

    response.status(200).send();
  } catch (err) {
    response.status(500).send(err.message);
  }
};

app.post('/', cancelUserBooking);

module.exports = app;
