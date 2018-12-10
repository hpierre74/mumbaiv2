// import { INIT } from '../modules/app/app.action';
import { getPageContent } from '../modules/pageContentManager/pageContent.action';
import { CHANGE_LANG } from '../modules/lang/lang.actions';
import { UPDATE_CONTENT_SUCCESS } from '../modules/admin/editor/editor.action';

export default store => next => action => {
  const {
    router: { location },
    lang: { currentLang },
    pageContent: { page }
  } = store.getState();

  next(action);
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
      switch (action.payload.location.pathname) {
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
    case UPDATE_CONTENT_SUCCESS: {
      store.dispatch(getPageContent(page, currentLang));
      break;
    }

    default:
  }
};
