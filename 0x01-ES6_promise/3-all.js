import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];
  Promise.all(promises)
    .then((results) => {
      const [uploadPhotoResult, createUserResult] = results;
      console.log(`${uploadPhotoResult.body} ${createUserResult.firstName} ${createUserResult.lastName}`);
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}
