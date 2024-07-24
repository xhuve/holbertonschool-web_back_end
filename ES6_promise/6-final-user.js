/* eslint-disable import/extensions */
import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const result = await signUpUser(firstName, lastName)
    await uploadPhoto(fileName)
    console.log(`${result.firstName} ${lastName}`)
  } catch (error) {
    console.log(error.message)
  }
}
