import { getPageContent } from '../modules/pageContentManager/pageContent.action';
import { CHANGE_LANG } from '../modules/lang/lang.actions';
import { UPDATE_CONTENT_SUCCESS } from '../modules/admin/editor/editor.action';

const getContentForRoute = (pages, pathname, lang) => dispatch => {
  if (pathname === '/') {
    return dispatch(getPageContent('home', lang));
  }

  const pageItem = Object.values(pages).filter(page => page.path === pathname)[0];

  if (!pageItem) {
    return;
  }

  dispatch(getPageContent(pageItem.target, lang));
};

export default store => next => action => {
  const {
    router: { location },
    lang: { currentLang },
    pageContent: { page },
    app: {
      config: { pages },
    },
  } = store.getState();

  next(action);
  switch (action.type) {
    case CHANGE_LANG:
      store.dispatch(getContentForRoute(pages, location.pathname, action.lang));
      break;

    case '@@router/LOCATION_CHANGE':
      store.dispatch(getContentForRoute(pages, action.payload.location.pathname, currentLang));
      break;

    case UPDATE_CONTENT_SUCCESS: {
      store.dispatch(getPageContent(page, currentLang));
      break;
    }

    default:
  }
};
