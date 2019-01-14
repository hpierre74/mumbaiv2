import React from 'react';
import isString from 'lodash/isString';
import { setData, getNewKey, getData } from './firebase.utils';
/* eslint-disable no-console */
export const getPersonsPerService = (date, service) => {
  let persons = 0;

  return getData(`booker/availability/${date}/${service}`)
    .then(data => {
      if (!data) {
        return persons;
      }
      Object.values(data).map(booking => {
        persons = booking.persons + persons;

        return persons;
      });

      return persons;
    })
    .catch(err => console.log(err));
};

export const isBookingPossible = (booking, maxBookings) => {
  if (getPersonsPerService(booking.date, booking.service) >= maxBookings) {
    return false;
  }

  return true;
};

export const isInTime = (booking, service) => {
  const now = new Date();
  // const bookingHour = booking.time.substr(0, 2);

  if (now.getDate() === booking.date.substr(0, 2)) {
    if (now.getHours() >= service.timeLimit) {
      return false;
    }
  }

  return true;
};

export const isBookingValid = booking => {
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

  return true;
};

export const setBooking = booking => {
  if (!isBookingPossible(booking)) {
    return;
  }
  if (!isBookingValid(booking)) {
    return;
  }
  const newBookingKey = getNewKey('booker/bookings');
  const updates = {};
  updates[`/bookings/${newBookingKey}`] = {
    ...booking,
    id: newBookingKey,
  };
  updates[`/availability/${booking.date}/${booking.service}/${newBookingKey}`] = { persons: booking.persons };

  setData(`booker`, updates);
};

export const removeBooking = bookingId => {
  getData(`booker/bookings/${bookingId}`)
    .then(success => {
      const booking = success;
      const updates = [];
      updates[`/bookings/${bookingId}`] = null;
      updates[`/availability/${booking.date}/${booking.service}/${bookingId}`] = null;

      setData(`booker`, updates);
    })
    .catch(err => err);
};

export const renderBookableHours = services =>
  Object.values(services).map(service =>
    Object.values(service.bookableHours).map(hour => (
      <option key={hour} value={hour}>
        {hour}
      </option>
    )),
  );
