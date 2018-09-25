import CryptoJS from 'crypto-js';
import isString from 'lodash/isString';
import isNumber from 'lodash/isNumber';
import isDate from 'lodash/isDate';

import { getData, setData, getNewKey, increment } from '../firebase/firebase.class';

export const getBookingsForDate = date =>
  getData(`booker/bookings`).then(_bookings =>
    Object.values(_bookings.val()).filter(_booking => _booking.date === date),
  );

export const getBookingsForService = bookings => service =>
  Object.values(bookings)
    .filter(booking => booking.service === service)
    .reduce((acc, _booking) => ({ ...acc, _booking }));

export const getPersonsForDateService = booking =>
  getData(`booker/bookings`).then(_bookings =>
    Object.values(_bookings.val())
      .filter(_booking => _booking.service === booking.service && _booking.date === booking.date)
      .map(_booking => _booking.persons)
      .reduce((acc, persons) => acc + persons),
  );

export const getPersonsForDate = booking =>
  getData(`booker/bookings`).then(_bookings =>
    Object.values(_bookings.val())
      .filter(_booking => _booking.date === booking.date)
      .map(_booking => _booking.persons)
      .reduce((acc, persons) => acc + persons),
  );

// export const getServiceForTime = (time, services) => {
//   Object.values(services).map(service => service.bookableHours.filter(hour => hour === time))

export const isBookingPossible = booking => maxBookings =>
  getPersonsForDateService(booking)
    .then(!(persons => persons + booking.persons > maxBookings))
    .catch(err => console.log(err));

export const addBooking = booking => {
  if (!isBookingPossible(booking)) {
    return false;
  }
  const bookingKey = getNewKey(`booker/bookings`);

  return setData(`bookings/${bookingKey}`, booking)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

export const getTwoFirstIntChar = time => parseInt(time.substring(0, 2), 10);

class Booking {
  constructor(booking, maxBookings) {
    this.booking = booking;
    this.maxBookings = maxBookings;
    this.dateObj = booking ? new Date(`${booking.date} ${booking.time}:00 GMT+0200`) : null;
  }

  isBookingPossible = () =>
    getPersonsForDateService(this.booking)
      .then(!(persons => persons + this.booking.persons > this.maxBookings))
      .catch(err => console.log(err));

  isBookingValid = () => {
    const { booking } = this;
    if (!isString(booking.firstname)) {
      return false;
    }
    if (!isString(booking.lastname)) {
      return false;
    }
    if (!isString(booking.tel)) {
      return false;
    }
    if (!isString(booking.comment)) {
      return false;
    }
    if (!isString(booking.email)) {
      return false;
    }
    if (!isNumber(booking.persons)) {
      return false;
    }

    return true;
  };

  get = id => {
    getData(`booker/bookings/${id}`).then(res => {
      const booking = res.val();
      this.booking = booking;
      this.dateObj = new Date(`${booking.date} ${booking.time}:00 GMT+0200`);
    });
  };

  getService = () =>
    getData('public/config/services').then(
      services =>
        Object.keys(services.val()).filter(
          serviceKey =>
            getTwoFirstIntChar(this.booking.time) >= getTwoFirstIntChar(services.val()[serviceKey].startTime) &&
            getTwoFirstIntChar(this.booking.time) <= getTwoFirstIntChar(services.val()[serviceKey].endTime),
        ),
      // Object.keys(services.val()).map(serviceKey => {
      //   const service = services.val()[serviceKey];

      //   const time = getTwoFirstIntChar(this.booking.time);

      //   if (time >= getTwoFirstIntChar(service.startTime) && time <= getTwoFirstIntChar(service.endTime)) {
      //     key = serviceKey;

      //     return key || null;
      //   }

      //   return key ? null : null;
      // }),
    );

  add = () => {
    // if (!this.isBookingValid()) {
    //   return;
    // }
    // if (!this.isBookingPossible()) {
    //   return;
    // }
    const bookingKey = getNewKey('booker/bookings');
    const updates = {};
    // const booking = CryptoJS.AES.encrypt(
    //   JSON.stringify({ ...this.booking, date: this.date, id: ref }),
    //   'secret key 123',
    // );
    this.getService(this.booking.time).then(key => {
      console.log(key);

      updates[`/bookings/${bookingKey}`] = {
        ...this.booking,
        id: bookingKey,
        dateObj: this.dateObj,
        service: key,
      };

      return setData(`booker`, updates).then(() => {
        increment('stats/bookings/total', 1);
        increment('stats/bookings/persons', this.booking.persons);
      });
    });
  };
  remove = () => {};
}
export default Booking;
