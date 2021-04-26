/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */


 const exclusionList = require('metro-config/src/defaults/exclusionList');
 const path = require('path');

const blockList= exclusionList([
  /node_modules\/.*\/node_modules\/react-native\/.*/,
]);

 module.exports = (async () => {
  return {
    projectRoot: path.resolve(__dirname, '.'),
    watchFolders: [
      path.resolve(__dirname, '../../node_modules'),
      // path.resolve(__dirname, '../core'), // Add your packages Here!
    ],
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
    resolver: {
      blockList,
    },
  };

 })()

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
