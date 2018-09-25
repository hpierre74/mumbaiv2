import { getData } from '../../utils/firebase.utils';

export const GET_PAGE_CONTENT_BEGIN = 'pageContent/GET_PAGE_CONTENT_BEGIN';
export const GET_PAGE_CONTENT_SUCCESS = 'pageContent/GET_PAGE_CONTENT_SUCCESS';
export const GET_PAGE_CONTENT_FAILURE = 'pageContent/GET_PAGE_CONTENT_FAILURE';

export function getPageContent(ref, lang) {
  return dispatch => {
    dispatch({
      type: GET_PAGE_CONTENT_BEGIN,
    });

    const promise = new Promise((resolve, reject) => {
      const doRequest = getData(`public/content/${lang}/${ref}`);
      doRequest.then(
        res => {
          dispatch({
            type: GET_PAGE_CONTENT_SUCCESS,
            data: res.val(),
          });
          resolve(res);
        },
        err => {
          dispatch({
            type: GET_PAGE_CONTENT_FAILURE,
            data: { error: err },
          });
          reject(err);
        },
      );
    });

    return promise;
  };
}
