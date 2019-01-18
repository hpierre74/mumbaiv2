import { requestGet } from './http.utils';

const initializeApp = () => requestGet('https://mumbai-redux.firebaseio.com/public/config.json').then(res => res.body);

export default initializeApp;
