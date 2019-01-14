import omit from 'lodash/omit';
import { setFile, getData, setData, getNewKey, deleteFile } from '../../../utils/firebase.utils';
import { showToast } from '../../toaster/toaster.action';

export const GET_EVENTS_FAILURE = 'events/GET_EVENTS_FAILURE';
export const GET_EVENTS_SUCCESS = 'events/GET_EVENTS_SUCCESS';

export const SET_EVENT_FAILURE = 'events/SET_EVENT_FAILURE';
export const SET_EVENT_SUCCESS = 'events/SET_EVENT_SUCCESS';

export const SET_EDIT_EVENT = 'events/SET_EDIT_EVENT';
export const UNSET_EDIT_EVENT = 'events/UNSET_EDIT_EVENT';

export const UPDATE_EVENT_SUCCESS = 'events/UPDATE_EVENT_SUCCESS';
export const UPDATE_EVENT_FAILURE = 'events/UPDATE_EVENT_FAILURE';

export const DELETE_EVENT_FAILURE = 'events/DELETE_EVENT_FAILURE';
export const DELETE_EVENT_SUCCESS = 'events/DELETE_EVENT_SUCCESS';

export const getEvents = () => async (dispatch, getState) => {
  try {
    const {
      lang: { currentLang },
    } = getState();
    const events = await getData(`public/content/${currentLang}/home/events`);
    dispatch({
      type: GET_EVENTS_SUCCESS,
      events,
    });
  } catch (e) {
    dispatch({
      type: GET_EVENTS_FAILURE,
      ...e,
    });
  }
};

export const setEvent = event => async dispatch => {
  try {
    const { imageName, image, date } = event;
    if (image.size > 1000000) {
      dispatch(showToast('error', 'Image is too big (> 1Mo) !'));

      return;
    }
    const fileSuccess = await setFile(`public/events/${imageName}`, image);
    const eventKey = getNewKey('public/content/fr/events');
    const eventData = omit(
      {
        ...event,
        date: date.valueOf(),
        key: eventKey,
        imagePath: fileSuccess.metadata.fullPath,
        imageUrl: await fileSuccess.ref.getDownloadURL(),
      },
      ['image', 'modal', 'events'],
    );
    const updates = {};
    updates[`/fr/home/events/${eventKey}`] = eventData;
    updates[`/en/home/events/${eventKey}`] = eventData;

    await setData(`public/content`, updates);
    dispatch({ type: SET_EVENT_SUCCESS });
    dispatch(showToast('success', 'Event successfully uploaded !'));
    dispatch(getEvents());
  } catch (e) {
    dispatch(showToast('error', 'Event creation failed !'));
    dispatch({
      type: SET_EVENT_FAILURE,
      ...e,
    });
    throw new Error(e);
  }
};

export const deleteEvent = event => async dispatch => {
  try {
    const updates = {};
    updates[`/fr/home/events/${event.key}`] = null;
    updates[`/en/home/events/${event.key}`] = null;

    await setData(`public/content`, updates);
    await deleteFile(event.imagePath);

    dispatch({ type: DELETE_EVENT_SUCCESS });
    dispatch(showToast('success', 'Event successfully deleted !'));
  } catch (e) {
    dispatch({ type: DELETE_EVENT_FAILURE });
    dispatch(showToast('error', 'Event deletion failed !'));

    throw new Error(e);
  }
};

export const setEditEvent = event => dispatch => {
  dispatch({
    type: SET_EDIT_EVENT,
    event,
  });
};

export const unsetEditEvent = () => ({ type: UNSET_EDIT_EVENT });
export const updateEvent = event => async dispatch => {
  try {
    const { imagePath, imageUrl, imageName, image, date } = event;

    const fileSuccess = image
      ? await setFile(`public/events/${imageName}`, image)
      : {
          metadata: { fullPath: imagePath },
          ref: { getDownloadURL: () => imageUrl },
        };

    const eventKey = event.key;
    const eventData = omit(
      {
        ...event,
        date: date.valueOf(),
        key: eventKey,
        imagePath: fileSuccess.metadata.fullPath,
        imageUrl: await fileSuccess.ref.getDownloadURL(),
      },
      ['image', 'modal', 'events'],
    );
    const updates = {};
    updates[`/fr/home/events/${eventKey}`] = eventData;
    updates[`/en/home/events/${eventKey}`] = eventData;

    await setData(`public/content`, updates);
    dispatch({ type: UPDATE_EVENT_SUCCESS });
    dispatch(showToast('success', 'Event successfully updated !'));
    dispatch(getEvents());
  } catch (e) {
    dispatch(showToast('error', 'Event update failed !'));
    dispatch({
      type: UPDATE_EVENT_FAILURE,
      ...e,
    });
    throw new Error(e);
  }
};
