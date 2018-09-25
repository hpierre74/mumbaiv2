export const DEFAULT_CONFIG = {
  debug: false,
};

export const prepareConfig = () => {
  const config = { ...DEFAULT_CONFIG };

  if (process.env.REACT_APP_ENV !== 'prod') {
    config.debug = true;
  }

  return config;
};
