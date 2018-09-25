import firebase from 'firebase/app';
import 'firebase/database';

export function getData(ref) {
  return firebase
    .database()
    .ref(ref)
    .once('value');
}

export function getOrderedData(ref, child) {
  return firebase
    .database()
    .ref(ref)
    .orderByChild(child)
    .once('value');
}

export function streamData(ref, child) {
  return firebase
    .database()
    .ref(ref)
    .orderByChild(child)
    .on('value');
}

export function setData(ref, data) {
  return firebase
    .database()
    .ref(ref)
    .update(data);
}

export const increment = (ref, number) =>
  firebase
    .database()
    .ref(ref)
    .transaction(currentCount => (currentCount ? parseInt(currentCount, 10) + parseInt(number, 10) : number))
    .catch(err => console.log(err)); // eslint-disable-line no-console

export function getNewKey(ref) {
  return firebase
    .database()
    .ref(ref)
    .push().key;
}
