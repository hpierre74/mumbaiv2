import omit from 'lodash/omit';
import { setFile, getData, setData, getNewKey } from '../../../utils/firebase.utils';
import { showToast } from '../../toaster/toaster.action';

export const GET_EVENTS_FAILURE = 'events/GET_EVENTS_FAILURE';
export const GET_EVENTS_SUCCESS = 'events/GET_EVENTS_SUCCESS';

export const SET_EVENT_FAILURE = 'events/SET_EVENT_FAILURE';
export const SET_EVENT_SUCCESS = 'events/SET_EVENT_SUCCESS';

export const getEvents = () => async (dispatch, getState) => {
  try {
    const {
      lang: { currentLang },
    } = getState();
    const events = await getData(`public/content/${currentLang}/home/events`);
    dispatch({ type: GET_EVENTS_SUCCESS, events });
  } catch (e) {
    dispatch({ type: GET_EVENTS_FAILURE, ...e });
  }
};

export const setEvent = event => async dispatch => {
  try {
    const { imageName, image, date } = event;

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
    dispatch({ type: SET_EVENT_FAILURE, ...e });
    throw new Error(e);
  }
};
