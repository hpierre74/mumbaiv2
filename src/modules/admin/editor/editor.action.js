import { setData } from '../../firebase/firebase.class';

export const TOGGLE_CONTENT_MODAL = 'editor/TOGGLE_CONTENT_MODAL';
export const toggleContentModal = () => ({ type: TOGGLE_CONTENT_MODAL });

export const UPDATE_CONTENT_SUCCESS = 'editor/UPDATE_CONTENT_SUCCESS';
export const UPDATE_CONTENT_FAILURE = 'editor/UPDATE_CONTENT_FAILURE';

export const updateContent = (path, content) => async dispatch => {
  try {
    await setData(path, content);
    dispatch({ type: UPDATE_CONTENT_SUCCESS });
  } catch (e) {
    dispatch({ type: UPDATE_CONTENT_FAILURE });
  }
};
