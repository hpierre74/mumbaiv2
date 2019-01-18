import { TOGGLE_NAVBAR, CONFIG_INIT } from './app.action';
import { HIDE_SPLASH, SHOW_SPLASH } from '../splash/splash.action';
import { GET_INSTAGRAM_FEED_SUCCESS } from '../instagram/instagram.action';

const initialState = {
  config: {
    pages: {},
    modules: {},
    style: {},
  },
  splash: false,
  splashed: false,
  instagramed: false,
  mobileOpen: false,
  initialized: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CONFIG_INIT:
      return {
        ...state,
        config: action.config,
        initialized: true,
      };

    case TOGGLE_NAVBAR:
      return {
        ...state,
        mobileOpen: !state.mobileOpen,
      };

    case HIDE_SPLASH:
      return {
        ...state,
        splash: false,
      };

    case SHOW_SPLASH:
      return {
        ...state,
        splash: true,
        splashed: true,
      };

    case GET_INSTAGRAM_FEED_SUCCESS:
      return {
        ...state,
        instagramed: true,
      };

    default:
      return state;
  }
}
