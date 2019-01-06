import { GET_CONFIG_SUCCESS, TOGGLE_NAVBAR } from './app.action';
import { HIDE_SPLASH, SHOW_SPLASH } from '../splash/splash.action';

const initialState = {
  config: {
    pages: {},
    modules: {},
  },
  splash: false,
  initialized: false,
  mobileOpen: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CONFIG_SUCCESS:
      return {
        ...state,
        config: action.data,
      };

    case TOGGLE_NAVBAR:
      return { ...state, mobileOpen: !state.mobileOpen };

    case HIDE_SPLASH:
      return { ...state, splash: false, initialized: true };

    case SHOW_SPLASH:
      return { ...state, splash: true };

    default:
      return state;
  }
}
