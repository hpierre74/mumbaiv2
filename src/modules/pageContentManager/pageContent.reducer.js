import { GET_PAGE_CONTENT_BEGIN, GET_PAGE_CONTENT_FAILURE, GET_PAGE_CONTENT_SUCCESS } from './pageContent.action';

const initialState = {
  getPageContentPending: false,
  getPageContentError: null,
  content: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PAGE_CONTENT_BEGIN:
      // Just after a request is sent
      return {
        ...state,
        getPageContentPending: true,
        getPageContentError: null,
      };

    case GET_PAGE_CONTENT_SUCCESS:
      // The request is success
      return {
        ...state,
        getPageContentPending: false,
        getPageContentError: null,
        content: { ...action.data },
      };

    case GET_PAGE_CONTENT_FAILURE:
      // The request is failed
      return {
        ...state,
        getPageContentPending: false,
        getPageContentError: action.data.error,
      };

    default:
      return state;
  }
}
