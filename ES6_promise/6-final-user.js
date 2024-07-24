import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

const handleProfileSignup = async (firstName, lastName, fileName) => {
  try {
    const user = await signUpUser(firstName, lastName);
    await uploadPhoto(fileName);
    console.log(`${user.firstName} ${user.lastName}`);
  } catch (error) {
    console.log(error.message);
  }
};

export default handleProfileSignup;