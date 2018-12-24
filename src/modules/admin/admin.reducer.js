import { CONFIG_INIT_ADMIN_SUCCESS } from './admin.action';
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../auth/auth.action';

const initialState = {
  config: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CONFIG_INIT_ADMIN_SUCCESS:
      return {
        ...state,
        config: action.config,
      };

    case LOGIN_SUCCESS: {
      return { ...state, isAdmin: true };
    }
    case LOGOUT_SUCCESS: {
      return { ...state, isAdmin: false };
    }
    default:
      return state;
  }
}
