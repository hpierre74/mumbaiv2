import {
  ADD_BOOKING_FAILURE,
  ADD_BOOKING_SUCCESS,
  DELETE_BOOKING_FAILURE,
  DELETE_BOOKING_SUCCESS,
} from './booking.action';

const initialState = {
  addBookingPending: false,
  addBookingError: null,
  addBookingSuccess: false,
  deleteBookingPending: false,
  deleteBookingError: null,
  deleteBookingSuccess: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOKING_SUCCESS:
      return {
        ...state,
        addBookingPending: false,
        addBookingSuccess: true,
      };

    case ADD_BOOKING_FAILURE:
      return {
        ...state,
        addBookingPending: false,
        addBookingError: action.error,
      };

    case DELETE_BOOKING_SUCCESS:
      // The request is success
      return {
        ...state,
        deleteBookingPending: false,
        deleteBookingSuccess: true,
      };

    case DELETE_BOOKING_FAILURE:
      // The request is failed
      return {
        ...state,
        deleteBookingPending: false,
        deleteBookingError: action.error,
      };

    default:
      return state;
  }
}
