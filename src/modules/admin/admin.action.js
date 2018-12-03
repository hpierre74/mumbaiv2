import { getData } from '../firebase/firebase.class';

export const CONFIG_INIT_ADMIN = 'admin/CONFIG_INIT_ADMIN';

export const configInitAdmin = async () => {
  const config = await getData('private/config');

  return {
    type: CONFIG_INIT_ADMIN,
    config,
  };
};
