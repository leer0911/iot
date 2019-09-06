const path = require('path');

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.js$/,
    use: ['raw-loader'],
    include: path.resolve(__dirname, '../../components'),
  });
  return config;
};
