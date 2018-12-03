import firebase from '@firebase/app';
import '@firebase/database';
import '@firebase/storage';

const config = {
  apiKey: `${process.env.REACT_APP_FIREBASE_APIKEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_DOMAIN}`,
  databaseURL: `${process.env.REACT_APP_FIREBASE_DB}`,
  projectId: `${process.env.REACT_APP_FIREBASE_ID}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING}`,
};

firebase.initializeApp(config);

const database = firebase.database();
export const storage = firebase.storage();

export const getFile = ref => storage.ref(ref).getDowloadUrl();

export const setFile = (ref, file) =>
  storage
    .ref()
    .child(ref)
    .put(file);

export const storageRef = ref => storage.ref(ref);

export async function getData(ref) {
  return database
    .ref(ref)
    .once('value')
    .then(snapshot => snapshot.val());
}

export function getOrderedData(ref, child) {
  return database
    .ref(ref)
    .orderByChild(child)
    .once('value');
}

export function getDataStream(ref, cb) {
  return database.ref(ref).on('value', snapshot => cb(snapshot));
}

export function setData(ref, data) {
  return database.ref(ref).update(data);
}

export const increment = (ref, number) =>
  database
    .ref(ref)
    .transaction(currentCount => (currentCount ? parseInt(currentCount, 10) + parseInt(number, 10) : number))
    .catch(err => console.log(err)); // eslint-disable-line no-console

export function getNewKey(ref) {
  return database.ref(ref).push().key;
}
