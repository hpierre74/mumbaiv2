import { CONFIG_INIT_ADMIN } from './admin.action';

const initialState = {
  config: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CONFIG_INIT_ADMIN:
      return {
        ...state,
        config: action.config,
      };

    default:
      return state;
  }
}
