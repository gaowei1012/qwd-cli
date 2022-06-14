/*
 * @Author: mingwei
 * @Date: 2022-06-14 17:13:53
 * @LastEditors: mingwei
 * @LastEditTime: 2022-06-14 17:32:26
 * @FilePath: /dg-cli/src/constants.js
 * @Description:
 */

const emojis = {
  error: "❌",
  recycle: "♻️ ",
  finger: "👉",
  star: "✨",
  warn: "⚠️",
};

const featuresEnum = {
  react: ["react", "typescript"],
  reactRouter: "react-native",
  // linter: "linter",
  configFiles: {
    linter: {
      eslint: "eslintConfig",
      eslintIgnore: "eslintIgnoreConfig",
      prettier: "prettierConfig",
    },
  },
};

const configFileTypes = {
  [featuresEnum.configFiles.linter.eslint]: ".eslintrc",
  [featuresEnum.configFiles.linter.eslintIgnore]: ".eslintignore",
  [featuresEnum.configFiles.linter.prettier]: ".prettierrc",
};

module.exports = { emojis, featuresEnum, configFileTypes };
