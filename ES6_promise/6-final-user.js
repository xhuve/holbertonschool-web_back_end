/* eslint-disable no-console */
/* eslint-disable import/extensions */
import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([uploadPhoto(fileName), signUpUser(firstName, lastName)])
    .then((value) => console.log(value));
}
