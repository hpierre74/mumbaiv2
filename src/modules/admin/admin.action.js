import { getData } from '../firebase/firebase.class';

export const CONFIG_INIT_ADMIN = 'app/CONFIG_INIT_ADMIN';

export const configInit = () => {
  const config = getData('private/config');

  return {
    type: CONFIG_INIT_ADMIN,
    config,
  };
};
