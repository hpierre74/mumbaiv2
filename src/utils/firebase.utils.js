import firebase from '@firebase/app';
import '@firebase/database';

export function getData(ref) {
  return firebase
    .database()
    .ref(ref)
    .once('value')
    .then(snapshot => snapshot.val());
}

export function setData(ref, data) {
  return firebase
    .database()
    .ref(ref)
    .update(data);
}

export function getNewKey(ref) {
  return firebase.database.ref(ref).push().key;
}
