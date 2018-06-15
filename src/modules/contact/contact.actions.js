export const SEND_MAIL_BEGIN = 'contact/SEND_MAIL_BEGIN';
export const SEND_MAIL_SUCCESS = 'contact/SEND_MAIL_SUCCESS';
export const SEND_MAIL_FAILURE = 'contact/SEND_MAIL_FAILURE';
export const SEND_MAIL_DISMISS_ERROR = 'contact/SEND_MAIL_ERROR';

export const TOGGLE_CONTACT_INFO_TEXT = 'contact/TOGGLE_CONTACT_INFO_TEXT';

export const toggleContactInfoText = contactInfoType => ({
  type: TOGGLE_CONTACT_INFO_TEXT,
  contactInfoType,
});

const config = { mailUrl: '/contact/sendmail' };

export const sendMail = mail => dispatch => {
  dispatch({
    type: SEND_MAIL_BEGIN,
  });

  const promise = new Promise((resolve, reject) => {
    const doRequest = fetch(config.mailUrl, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      body: mail,
    });
    doRequest.then(
      res => {
        dispatch({
          type: SEND_MAIL_SUCCESS,
          data: res,
        });
        resolve(res);
      },
      // Use rejectHandler as the second argument so that render errors won't be caught.
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
