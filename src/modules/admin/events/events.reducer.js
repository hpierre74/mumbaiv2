import { GET_EVENTS_SUCCESS, SET_EDIT_EVENT, UNSET_EDIT_EVENT } from './events.action';

const initialState = {
  events: null,
  selectedEvent: null,
  openEdit: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS_SUCCESS: {
      return {
        ...state,
        events: action.events,
      };
    }

    case SET_EDIT_EVENT: {
      return {
        ...state,
        selectedEvent: action.event,
        openEdit: true,
      };
    }

    case UNSET_EDIT_EVENT: {
      return {
        ...state,
        selectedEvent: null,
        openEdit: false,
      };
    }

    default:
      return state;
  }
}
