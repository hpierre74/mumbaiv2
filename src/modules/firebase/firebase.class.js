import firebase from 'firebase/app';
import 'firebase/database';

export function getData(ref) {
  return firebase
    .database()
    .ref(ref)
    .once('value');
}

export function setData(ref, data) {
  return firebase
    .database()
    .ref(ref)
    .update(data);
}
