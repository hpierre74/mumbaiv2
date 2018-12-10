import fetch from 'isomorphic-fetch';
export const initializeApp = () =>
  fetch('https://mumbai-redux.firebaseio.com/public/config.json').then(res =>
    console.log(res.json())
  );
