/* eslint-disable no-console */
// eslint-disable-next-line import/extensions
import { createUser, uploadPhoto } from './utils.js';

export default async function handleProfileSignup() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
  } catch (error) {
    console.log('Signup system offline');
  }
}
