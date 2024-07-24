/* eslint-disable no-console */
const uploadPhoto = require('./utils');
const createUser = require('./utils');

module.exports = async function handleProfileSignup() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
  } catch (error) {
    console.log('Signup system offline');
  }
};
