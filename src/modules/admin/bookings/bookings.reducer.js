import { CONFIG_INIT_ADMIN_SUCCESS } from '../admin.action';
import {
  SET_BOARD_ACTION_TYPE,
  GET_BOOKING,
  GET_BOOKINGS_BY_DATE,
  GET_BOOKINGS_BY_DATETIME,
  GET_BOOKINGS_BY_DATE_PHONE,
  GET_BOOKINGS_BY_TIME_RANGE,
} from './bookings.action';

const initialState = {
  config: null,
  bookings: [],
  booking: null,
  command: 'search',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CONFIG_INIT_ADMIN_SUCCESS:
      return {
        ...state,
        config: action.config,
      };
    case SET_BOARD_ACTION_TYPE:
      return {
        ...state,
        command: action.control,
      };

    case GET_BOOKING:
    case GET_BOOKINGS_BY_DATE:
    case GET_BOOKINGS_BY_DATETIME:
    case GET_BOOKINGS_BY_DATE_PHONE:
    case GET_BOOKINGS_BY_TIME_RANGE:
      return { ...state, bookings: action.bookings };

    default:
      return state;
  }
}
