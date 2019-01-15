import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import mail from './modules/mail/mail.reducer';
import lang from './modules/lang/lang.reducer';
import app from './modules/app/app.reducer';
import pageContent from './modules/pageContentManager/pageContent.reducer';
import admin from './modules/admin/admin.reducer';
import toaster from './modules/toaster/toaster.reducer';
import events from './modules/admin/events/events.reducer';
import instagram from './modules/instagram/instagram.reducer';
import bookings from './modules/admin/bookings/bookings.reducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    admin,
    mail,
    lang,
    app,
    pageContent,
    toaster,
    events,
    instagram,
    bookings,
  });
