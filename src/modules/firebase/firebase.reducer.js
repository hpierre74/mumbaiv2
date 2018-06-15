import { LOAD_DATA_BEGIN, LOAD_DATA_DISMISS_ERROR, LOAD_DATA_FAILURE, LOAD_DATA_SUCCESS } from './firebase.actions';

const initialState = {
  loadDataPending: false,
  loadDataError: null,
  content: {
    presentation: {
      food: '',
      bar: '',
      tapas: '',
      concept: '',
    },
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA_BEGIN:
      // Just after a request is sent
      return {
        ...state,
        loadDataPending: true,
        loadDataError: null,
      };

    case LOAD_DATA_SUCCESS:
      // The request is success
      return {
        ...state,
        loadDataPending: false,
        loadDataError: null,
        content: { ...action.data },
      };

    case LOAD_DATA_FAILURE:
      // The request is failed
      return {
        ...state,
        loadDataPending: false,
        loadDataError: action.data.error,
      };

    case LOAD_DATA_DISMISS_ERROR:
      // Dismiss the request failure error
      return {
        ...state,
        loadDataError: null,
      };

    default:
      return state;
  }
}
