import { getData } from '../../utils/firebase.utils';
import { requestPost } from '../../utils/http.utils';

export const CONFIG_INIT_ADMIN = 'admin/CONFIG_INIT_ADMIN';
export const CONFIG_INIT_ADMIN_SUCCESS = 'admin/CONFIG_INIT_ADMIN_SUCCESS';
export const CONFIG_INIT_ADMIN_FAILURE = 'admin/CONFIG_INIT_ADMIN_FAILURE';

export const BOOKINGS_CHECK_SUCCESS = 'admin/BOOKINGS_CHECK_SUCCESS';
export const BOOKINGS_CHECK_FAILURE = 'admin/BOOKINGS_CHECK_FAILURE';

export const INITIALIZE_ADMIN = 'amin/INITIALIZE_ADMIN';

export const configInitAdmin = () => async dispatch => {
  dispatch({ type: CONFIG_INIT_ADMIN });
  try {
    const config = await getData('private/config');
    dispatch({
      type: CONFIG_INIT_ADMIN_SUCCESS,
      config,
    });
  } catch (err) {
    dispatch({ type: CONFIG_INIT_ADMIN_SUCCESS, ...err });
  }
};

export const deleteBookings = () => async dispatch => {
  try {
    const twoDays = 86400000 * 2;
    const yesterday = Date.now() - twoDays;
    await requestPost('https://la-taverne-du-perroquet-lyon.firebaseapp.com/api/delete_bookings', { limit: yesterday });

    dispatch({ type: BOOKINGS_CHECK_SUCCESS });
  } catch (error) {
    dispatch({ type: BOOKINGS_CHECK_FAILURE, error });
  }
};

export const initializeAdmin = () => ({ type: INITIALIZE_ADMIN });
