import { removeBooking } from './booking.utils';
import { getNewKey, callApi } from '../../utils/firebase.utils';
import { encryptString } from '../../utils/encrypt.utils';
import { showToast } from '../toaster/toaster.action';

export const ADD_BOOKING_SUCCESS = 'booking/ADD_BOOKING_SUCCESS';
export const ADD_BOOKING_FAILURE = 'booking/ADD_BOOKING_FAILURE';

export const DELETE_BOOKING_SUCCESS = 'booking/DELETE_BOOKING_SUCCESS';
export const DELETE_BOOKING_FAILURE = 'booking/DELETE_BOOKING_FAILURE';

export const submitBooking = booking => async dispatch => {
  try {
    const bookingKey = getNewKey('booker/bookings');
    const safeBooking = {
      ...booking,
      email: encryptString(booking.email),
      tel: encryptString(booking.tel),
      firstname: encryptString(booking.firstname),
      lastname: encryptString(booking.lastname),
      id: bookingKey,
    };

    const res = await callApi('addBooking', safeBooking);

    if (res.data === true) {
      dispatch(showToast('success', 'Booking Enregistré !'));
      dispatch({ type: ADD_BOOKING_SUCCESS, booking: res.data });
    } else {
      dispatch(showToast('error', "Oups, votre réservation n'a pas fonctionné"));
      dispatch({ type: ADD_BOOKING_FAILURE, err: 'booking failed' });
    }
  } catch (err) {
    dispatch(showToast('error', "Oups, votre réservation n'a pas fonctionné", err));
    dispatch({ type: ADD_BOOKING_FAILURE, err: err.message });
  }
};

export const deleteBooking = bookingId => dispatch => {
  removeBooking(bookingId)
    .then(success => dispatch({ type: DELETE_BOOKING_SUCCESS, success }))
    .catch(err => dispatch({ type: DELETE_BOOKING_FAILURE, err }));
};
