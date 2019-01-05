import { GET_CONFIG_SUCCESS } from '../modules/app/app.action';
import { showToast } from '../modules/toaster/toaster.action';

export default store => next => action => {
  next(action);

  switch (action.type) {
    case GET_CONFIG_SUCCESS: {
      const {
        modules: {
          ad: { message, enabled },
        },
      } = action.data;
      if (enabled) {
        store.dispatch(showToast('new', message));
      }
      break;
    }

    default:
  }
};
