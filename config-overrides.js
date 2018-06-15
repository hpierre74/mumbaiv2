module.exports = config => {
  // Add Babel polyfill for React 16
  config.entry.unshift("babel-polyfill");

  config.plugins.forEach(element => {
    if (element.constructor.name === "HtmlWebpackPlugin") {
      // eslint-disable-next-line no-param-reassign
      element.options.xhtml = true;
    }
  });
  return config;
};
