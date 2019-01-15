import { requestGet } from '../../utils/http.utils';
import { isClientDesktop } from '../../utils/layout.utils';
import { isInstagramPopulated, isInstagramEnabled } from './instagram.selectors';

export const GET_INSTAGRAM_FEED_PENDING = 'instagram/GET_INSTAGRAM_FEED_PENDING';
export const GET_INSTAGRAM_FEED_SUCCESS = 'instagram/GET_INSTAGRAM_FEED_SUCCESS';
export const GET_INSTAGRAM_FEED_FAILURE = 'instagram/GET_INSTAGRAM_FEED_FAILURE';

export const getInstagramFeed = () => async (dispatch, getState) => {
  try {
    const state = getState();
    const isEnabled = isInstagramEnabled(state);
    const hasSentRequest = isInstagramPopulated(state);

    if (hasSentRequest || !isEnabled) {
      return;
    }

    dispatch({ type: GET_INSTAGRAM_FEED_PENDING });

    const instaApi = 'https://us-central1-la-taverne-du-perroquet-lyon.cloudfunctions.net/getInstagramFeed';
    const data = await requestGet(instaApi);

    const feed = data.body
      .filter(element => element.type !== 'video')
      .reduce((acc, current) => [...acc, { url: current.images.low_resolution.url, link: current.link }], [])
      .slice(0, isClientDesktop ? 8 : 4);

    dispatch({ type: GET_INSTAGRAM_FEED_SUCCESS, feed });
  } catch (e) {
    dispatch({ type: GET_INSTAGRAM_FEED_FAILURE });
  }
};
