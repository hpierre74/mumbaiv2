import { getBookingById, sortBookingsByHours } from '../../booking/booking.utils';
import { getOrderedDataEqual, getRangedData } from '../../../utils/firebase.utils';

export const GET_BOOKING = 'bookings/GET_BOOKING';
export const UPDATE_BOOKING = 'bookings/UPDATE_BOOKING';
export const DELETE_BOOKING = 'bookings/DELETE_BOOKING';

export const GET_BOOKINGS_BY_DATE = 'bookings/GET_BOOKINGS_BY_DATE';
export const GET_BOOKINGS_BY_DATETIME = 'bookings/GET_BOOKINGS_BY_DATETIME';
export const GET_BOOKINGS_BY_TIME_RANGE = 'bookings/GET_BOOKINGS_BY_TIME_RANGE';
export const GET_BOOKINGS_BY_PHONE_NUMBER = 'bookings/GET_BOOKINGS_BY_PHONE_NUMBER';
export const GET_BOOKINGS_BY_NAME = 'bookings/GET_BOOKINGS_BY_NAME';
export const GET_BOOKINGS_BY_DATE_PHONE = 'bookings/GET_BOOKINGS_BY_DATE';

export const DISABLE_BOOKINGS_FOR_DATE = 'bookings/DISABLE_BOOKINGS_FOR_DATE';
export const DISABLE_BOOKINGS_FOR_DATETIME = 'bookings/DISABLE_BOOKINGS_FOR_DATETIME';
export const DISABLE_BOOKINGS_FOR_DATE_RANGE = 'bookings/DISABLE_BOOKINGS_FOR_DATE_RANGE';
export const DISABLE_BOOKINGS_FOR_SERVICE = 'bookings/DISABLE_BOOKINGS_FOR_SERVICE';

export const DISABLE_BOOKINGS_FOR_PHONE_NUMBER = 'bookings/DISABLE_BOOKINGS_FOR_NUMBER';
export const DISABLE_BOOKINGS_FOR_EMAIL = 'bookings/DISABLE_BOOKINGS_FOR_EMAIL';

export const SET_BOARD_ACTION_TYPE = 'bookings/SET_BOARD_ACTION_TYPE';

export const setBoardActionType = type => dispatch => () => dispatch({ type: SET_BOARD_ACTION_TYPE, control: type });

export const getBooking = id => async dispatch => {
  try {
    const booking = await getBookingById(id);
    dispatch({ type: GET_BOOKING, booking });
  } catch (err) {
    throw new Error(err);
  }
};

export const getBookingsByDate = msTimestamp => async dispatch => {
  try {
    const bookings = await getOrderedDataEqual('booker/bookings', 'timestamp', msTimestamp);
    dispatch({ type: GET_BOOKINGS_BY_DATE, bookings });
  } catch (err) {
    throw new Error(err);
  }
};

export const getBookingsByService = (start, end) => async dispatch => {
  try {
    const bookings = await getRangedData('booker/bookings', 'hours', start, end);
    const sortedBookings = sortBookingsByHours(bookings);

    dispatch({ type: GET_BOOKINGS_BY_DATE, bookings: sortedBookings });
  } catch (err) {
    throw new Error(err);
  }
};

export const getBookingsByName = name => async dispatch => {
  try {
    const firstnameMatches = await getOrderedDataEqual('booker/bookings', 'firstname', name);
    const lastnameMatches = await getOrderedDataEqual('booker/bookings', 'lastname', name);

    dispatch({ type: GET_BOOKINGS_BY_DATE, bookings: { ...firstnameMatches, ...lastnameMatches } });
  } catch (err) {
    throw new Error(err);
  }
};

export const getBookingsByLastname = name => async dispatch => {
  try {
    const bookings = await getOrderedDataEqual('booker/bookings', 'lastname', name);
    dispatch({ type: GET_BOOKINGS_BY_DATE, bookings });
  } catch (err) {
    throw new Error(err);
  }
};

export const getBookingsByFistname = name => async dispatch => {
  try {
    const bookings = await getOrderedDataEqual('booker/bookings', 'firstname', name);
    dispatch({ type: GET_BOOKINGS_BY_DATE, bookings });
  } catch (err) {
    throw new Error(err);
  }
};

export const getBookingsByTimeRange = (start, end) => async dispatch => {
  try {
    const bookings = await getRangedData('booker/bookings', 'timestamp', start, end);
    const sortedBookings = sortBookingsByHours(bookings);

    dispatch({ type: GET_BOOKINGS_BY_TIME_RANGE, bookings: sortedBookings });
  } catch (err) {
    throw new Error(err);
  }
};
