import { getData } from '../../utils/firebase.utils';

export const CONFIG_INIT = 'app/CONFIG_INIT';
export const GET_CONFIG_BEGIN = 'app/GET_CONFIG_BEGIN';
export const GET_CONFIG_SUCCESS = 'app/GET_CONFIG_SUCCESS';
export const GET_CONFIG_FAILURE = 'app/GET_CONFIG_FAILURE';

export const TOGGLE_NAVBAR = 'app/TOGGLE_NAVBAR';

export const toggleNavbar = () => ({ type: TOGGLE_NAVBAR });

export function configInit() {
  return dispatch => {
    dispatch({ type: GET_CONFIG_BEGIN });

    const promise = new Promise((resolve, reject) => {
      const doRequest = getData(`public/config`);
      doRequest.then(
        res => {
          dispatch({
            type: GET_CONFIG_SUCCESS,
            data: res,
          });
          resolve(res);
        },
        err => {
          dispatch({
            type: GET_CONFIG_FAILURE,
            data: { error: err },
          });
          reject(err);
        },
      );
    });

    return promise;
  };
}
