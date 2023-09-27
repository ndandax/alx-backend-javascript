import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];

  return Promise.all(promises)
    .then((results) => {
      const [uploadPhotoResult, createUserResult] = results;
      return `${uploadPhotoResult.body} ${createUserResult.firstName} ${createUserResult.lastName}`;
    })
    .catch(() => 'Signup system offline');
}
