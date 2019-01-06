import { GET_COMPONENT_SUCCESS } from './components.action';

const initialState = {
  Home: null,
  Contact: null,
  Cocktails: null,
  Food: null,
  Book: null,
  Admin: null,
  home: {},
  contact: {},
  cocktails: {},
  food: {},
  book: {},
  admin: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMPONENT_SUCCESS:
      return {
        ...state,
        [action.name]: action.component,
      };

    default:
      return state;
  }
}
