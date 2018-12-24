export const SHOW_SPLASH = 'SHOW_SPLASH';
export const HIDE_SPLASH = 'HIDE_SPLASH';

export const showSplash = () => dispatch => {
  dispatch({ type: SHOW_SPLASH, privacy: true });
  setTimeout(() => {
    dispatch({ type: HIDE_SPLASH, privacy: true });
  }, 1000);
};
