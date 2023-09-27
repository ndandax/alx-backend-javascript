import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];
  
  return Promise.all(promises)
    .then((results) => {
      const [uploadPhotoResult, createUserResult] = results;
      return `${uploadPhotoResult.body} ${createUserResult.firstName} ${createUserResult.lastName}`;
    })
    .catch(() => {
      return 'Signup system offline';
    });
}
