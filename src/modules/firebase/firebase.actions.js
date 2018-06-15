import { getData } from './firebase.class';

export const LOAD_DATA_BEGIN = 'firebase/LOAD_BEGIN';
export const LOAD_DATA_SUCCESS = 'firebase/LOAD_SUCCESS';
export const LOAD_DATA_FAILURE = 'firebase/LOAD_FAILURE';
export const LOAD_DATA_DISMISS_ERROR = 'fiebase/LOAD_ERROR';

export const FIREBASE_INIT = 'firebase/INIT';

export const firebaseInit = () => ({
  type: FIREBASE_INIT,
});

export function loadData(ref) {
  return dispatch => {
    // optionally you can have getState as the second argument
    dispatch({
      type: LOAD_DATA_BEGIN,
    });

    const promise = new Promise((resolve, reject) => {
      const doRequest = getData(ref);
      doRequest.then(
        res => {
          dispatch({
            type: LOAD_DATA_SUCCESS,
            data: res.val(),
          });
          resolve(res);
        },
        // Use rejectHandler as the second argument so that render errors won't be caught.
        err => {
          dispatch({
            type: LOAD_DATA_FAILURE,
            data: { error: err },
          });
          reject(err);
        },
      );
    });

    return promise;
  };
}

export function dismissLoadDataError() {
  return {
    type: LOAD_DATA_DISMISS_ERROR,
  };
}
