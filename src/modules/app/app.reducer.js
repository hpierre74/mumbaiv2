import { GET_CONFIG_SUCCESS, TOGGLE_NAVBAR } from './app.action';

const initialState = {
  config: {
    pages: {},
  },
  mobileOpen: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CONFIG_SUCCESS:
      return {
        ...state,
        config: action.data,
      };

    case TOGGLE_NAVBAR: {
      return { ...state, mobileOpen: !state.mobileOpen };
    }

    default:
      return state;
  }
}
