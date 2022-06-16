/*
 * @Author: mingwei
 * @Date: 2022-03-29 14:04:41
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-22 15:56:22
 * @FilePath: /yl-app/frontend/metro.config.js
 * @Description:
 */

module.exports = {
  // dependencies: {
  //   'react-native-flipper': {
  //     platforms: {
  //       ios: null, // Disable autolinking on iOS
  //     },
  //   },
  // },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
