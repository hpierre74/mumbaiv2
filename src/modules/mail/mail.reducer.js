import { SEND_MAIL_BEGIN, SEND_MAIL_DISMISS_ERROR, SEND_MAIL_FAILURE, SEND_MAIL_SUCCESS } from './mail.actions';

const initialState = {
  sendMailPending: false,
  sendMailError: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEND_MAIL_BEGIN:
      // Just after a request is sent
      return {
        ...state,
        sendMailPending: true,
        sendMailError: null,
      };

    case SEND_MAIL_SUCCESS:
      // The request is success
      return {
        ...state,
        sendMailPending: false,
        sendMailError: null,
      };

    case SEND_MAIL_FAILURE:
      // The request is failed
      return {
        ...state,
        sendMailPending: false,
        sendMailError: action.data.error,
      };

    case SEND_MAIL_DISMISS_ERROR:
      // Dismiss the request failure error
      return {
        ...state,
        sendMailError: null,
      };

    default:
      return state;
  }
}
