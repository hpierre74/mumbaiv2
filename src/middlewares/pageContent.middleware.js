// import { INIT } from '../modules/app/app.action';
import { getPageContent } from '../modules/pageContentManager/pageContent.action';
import { CHANGE_LANG } from '../modules/lang/lang.actions';

export default store => next => action => {
  const { router: { location }, lang: { currentLang } } = store.getState();
  const currentAction = { ...action };

  next(currentAction);

  switch (action.type) {
    case CHANGE_LANG:
      switch (location.pathname) {
        case '/': {
          store.dispatch(getPageContent('home', action.lang));
          break;
        }
        case '/contact': {
          store.dispatch(getPageContent('contact', action.lang));
          break;
        }
        case '/book': {
          store.dispatch(getPageContent('book', action.lang));
          break;
        }
        default:
          break;
      }
      break;
    case '@@router/LOCATION_CHANGE': {
      switch (action.payload.pathname) {
        case '/': {
          store.dispatch(getPageContent('home', currentLang));
          break;
        }
        case '/contact': {
          store.dispatch(getPageContent('contact', currentLang));
          break;
        }
        case '/book': {
          store.dispatch(getPageContent('book', currentLang));
          break;
        }
        default:
      }
      break;
    }

    default:
  }
};
