import { requestGet } from '../../utils/http.utils';
import { isClientDesktop } from '../../utils/layout.utils';

export const GET_INSTAGRAM_FEED_SUCCESS = 'GET_INSTAGRAM_FEED_SUCCESS';
export const GET_INSTAGRAM_FEED_FAILURE = 'GET_INSTAGRAM_FEED_FAILURE';

export const getInstagramFeed = accessToken => async dispatch => {
  try {
    const {
      body: { data },
    } = await requestGet(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${accessToken}&count=15`);

    const feed = data
      .filter(element => element.type !== 'video')
      .reduce(
        (acc, current) => [
          ...acc,
          {
            url: current.images.low_resolution.url,
            link: current.link,
          },
        ],
        [],
      )
      .slice(0, isClientDesktop ? 8 : 4);

    dispatch({
      type: GET_INSTAGRAM_FEED_SUCCESS,
      feed,
    });
  } catch (e) {
    dispatch({ type: GET_INSTAGRAM_FEED_FAILURE });
  }
};
