const functions = require('firebase-functions');
const fetch = require('superagent');
const cors = require('cors')({ origin: true });
const admin = require('../admin');

const DB_PATH = functions.config().databaseUrl;

const selectBookingsToDelete = (bookings, tsLimit) =>
  Object.values(bookings)
    .filter(booking => booking.timestamp < tsLimit)
    .reduce((acc, current) => ({ ...acc, [`booker/bookings/${current.id}`]: null }), {});

const deleteBookings = (request, response) =>
  cors(request, response, async () => {
    try {
      const timeLimit = request.body.limit;

      const bookings = await fetch
        .get(`${DB_PATH}/booker/bookings.json`)
        .timeout(5000)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .then(res => res.body);

      const updates = selectBookingsToDelete(bookings, timeLimit);

      admin
        .database()
        .ref('/')
        .update(updates);

      return response.status(200).send('old bookings successfully deleted');
    } catch (err) {
      return response.status(400).send(err);
    }
  });

module.exports = deleteBookings;
