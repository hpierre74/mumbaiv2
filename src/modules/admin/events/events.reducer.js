import { GET_EVENTS_SUCCESS } from './events.action';

const initialState = {
  events: null,
  selectedEvent: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS_SUCCESS: {
      return { ...state, events: action.events };
    }

    default:
      return state;
  }
}
