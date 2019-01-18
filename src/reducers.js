import mail from './modules/mail/mail.reducer';
import lang from './modules/lang/lang.reducer';
import app from './modules/app/app.reducer';
import pageContent from './modules/pageContentManager/pageContent.reducer';
import admin from './modules/admin/admin.reducer';
import toaster from './modules/toaster/toaster.reducer';
import events from './modules/admin/events/events.reducer';

export default {
  mail,
  lang,
  app,
  pageContent,
  toaster,
  admin,
  events,
};
