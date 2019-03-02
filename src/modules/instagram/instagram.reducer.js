import { GET_INSTAGRAM_FEED_SUCCESS, GET_INSTAGRAM_FEED_PENDING } from '../instagram/instagram.action';
import { CONFIG_INIT } from '../app/app.action';

const initialState = {
  feed: null,
  initialized: false,
  enabled: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CONFIG_INIT:
      return {
        ...state,
        enabled: action.config.modules.instagram.enabled,
      };

    case GET_INSTAGRAM_FEED_PENDING:
      return {
        ...state,
        initialized: true,
      };

    case GET_INSTAGRAM_FEED_SUCCESS:
      return {
        ...state,
        feed: action.feed,
        initialized: true,
      };

    default:
      return state;
  }
}
