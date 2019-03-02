import { setData, getData, getNewKey } from '../../utils/firebase.utils';

export const getBookingById = id => getData(`booker/bookings/${id}`);

export const getBookingByLastname = async lastname => {
  const bookings = await getData(`booker/bookings`);

  return Object.values(bookings).filter(booking => booking.lastname === lastname);
};

export const setBooking = booking => {
  const id = getNewKey('booker/bookings');
  const date = new Date(booking.date);
  const today = new Date();

  const newBooking = {
    ...booking,
    id,
    date: date.toString(),
    timestamp: date.getTime(),
    currentTime: today.getTime(),
    offset: today.getTimezoneOffset(),
  };

  return setData(`booker/bookings/${id}`, newBooking);
};

export const sortBookingsByHours = bookings =>
  Object.values(bookings).sort(
    (a, b) => parseInt(a.hours.replace(':', ''), 10) - parseInt(b.hours.replace(':', ''), 10),
  );

export const removeBooking = id => setData(`booker/bookings/${id}`, null);
