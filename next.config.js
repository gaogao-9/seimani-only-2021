// @ts-check
const path = require("path");

module.exports = {
  future: {
    webpack5: true,
  },
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": path.resolve(__dirname),
    };

    return config;
  },
};
