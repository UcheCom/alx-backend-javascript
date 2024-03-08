Import signUpUser from './4-user-promise';
Import upLoadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([user, photo])
    .then((vals) => {
      const res = [];
      vals.forEach((val) => {
        if (val.status === 'fulfilled') {
          res.push({ status: val.status, value: val.value });
        } else {
          res.push({ status: val.status, value: `${val.reason}` });
        }
      });
      return result;
    });
}
