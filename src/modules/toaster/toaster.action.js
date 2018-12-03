export const TOGGLE_TOAST = 'toaster/TOGGLE_TOAST';
export const SHOW_TOAST = 'toaster/SHOW_TOAST';
export const HIDE_TOAST = 'toaster/HIDE_TOAST';

export const toggleToast = (variant, content, error) => ({ type: TOGGLE_TOAST, variant, content, error });

export const showToast = (variant, content) => ({ type: SHOW_TOAST, variant, content });
export const hideToast = () => (dispatch, getState) => {
  const { toaster: { visible } } = getState();
  if (!visible) {
    return;
  }
  dispatch({ type: HIDE_TOAST });
};
