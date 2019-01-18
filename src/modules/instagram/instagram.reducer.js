import { GET_INSTAGRAM_FEED_SUCCESS, GET_INSTAGRAM_FEED_FAILURE } from '../instagram/instagram.action';
import { CONFIG_INIT } from '../app/app.action';

const initialState = {
  feed: [],
  initialized: false,
  enabled: false,
  accessToken: null,
  clientId: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CONFIG_INIT:
      return {
        ...state,
        enabled: action.config.modules.instagram.enabled,
        accessToken: action.config.modules.instagram.accessToken,
        clientId: action.config.modules.instagram.clientId,
      };

    case GET_INSTAGRAM_FEED_SUCCESS:
      return {
        ...state,
        feed: action.feed,
        initialized: true,
      };

    case GET_INSTAGRAM_FEED_FAILURE:
      return {
        ...state,
        feed: 'error',
      };

    default:
      return state;
  }
}
