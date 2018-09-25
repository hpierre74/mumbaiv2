import { requestPost } from '../../utils/http.utils';

export const SEND_MAIL_BEGIN = 'mail/SEND_MAIL_BEGIN';
export const SEND_MAIL_SUCCESS = 'mail/SEND_MAIL_SUCCESS';
export const SEND_MAIL_FAILURE = 'mail/SEND_MAIL_FAILURE';
export const SEND_MAIL_DISMISS_ERROR = 'mail/SEND_MAIL_ERROR';

const config = { mailServiceUrl: 'https://us-central1-mumbai-redux.cloudfunctions.net/sendMail' };

export const sendMail = mail => dispatch => {
  dispatch({
    type: SEND_MAIL_BEGIN,
  });

  const promise = new Promise((resolve, reject) => {
    const doRequest = requestPost(config.mailServiceUrl, mail);

    doRequest.then(
      res => {
        dispatch({
          type: SEND_MAIL_SUCCESS,
          data: res,
        });
        resolve(res);
      },
      err => {
        dispatch({
          type: SEND_MAIL_FAILURE,
          data: { error: err },
        });
        reject(err);
      },
    );
  });

  return promise;
};

export function dismissSendMailError() {
  return {
    type: SEND_MAIL_DISMISS_ERROR,
  };
}
