import { GET_CONFIG_SUCCESS } from '../app/app.action';

const initialState = {
  config: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CONFIG_SUCCESS:
      return {
        ...state,
        config: action.data,
      };
    default:
      return state;
  }
}
