import { setBooking, removeBooking } from './booking.utils';

export const ADD_BOOKING_SUCCESS = 'booking/ADD_BOOKING_SUCCESS';
export const ADD_BOOKING_FAILURE = 'booking/ADD_BOOKING_FAILURE';

export const DELETE_BOOKING_SUCCESS = 'booking/DELETE_BOOKING_SUCCESS';
export const DELETE_BOOKING_FAILURE = 'booking/DELETE_BOOKING_FAILURE';

export const addBooking = booking => dispatch => {
  setBooking(booking)
    .then(success => dispatch({ type: ADD_BOOKING_SUCCESS, success }))
    .catch(err => dispatch({ type: ADD_BOOKING_FAILURE, err }));
};

export const deleteBooking = bookingId => dispatch => {
  removeBooking(bookingId)
    .then(success => dispatch({ type: DELETE_BOOKING_SUCCESS, success }))
    .catch(err => dispatch({ type: DELETE_BOOKING_FAILURE, err }));
};
