import { setData, getData, getNewKey } from '../../utils/firebase.utils';

export const getBooking = id => getData(`booker/bookings/${id}`);

export const getBookingByLastname = async lastname => {
  const bookings = await getData(`booker/bookings`);

  return Object.values(bookings).filter(booking => booking.lastname === lastname);
};

export const setBooking = booking => {
  const id = getNewKey('booker/bookings');
  const newBooking = { ...booking, id, date: booking.date.toDate() };

  return setData(`booker/bookings/${id}`, newBooking);
};

export const removeBooking = id => setData(`booker/bookings/${id}`, null);
