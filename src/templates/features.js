/*
 * @Author: mingwei
 * @Date: 2022-06-14 17:20:19
 * @LastEditors: mingwei
 * @LastEditTime: 2022-06-14 20:34:45
 * @FilePath: /dg-cli/src/templates/features.js
 * @Description:
 */
const chalk = require("chalk");
const { prompt } = require("inquirer");
const { featuresEnum } = require("../constants");
const { hasReactFeature, hasRouterFeature, logWarnings } = require("../utils");

const react = {
  name: "React",
  value: featuresEnum.react,
  checked: true,
  description: "A JavaScript library for building user interfaces",
  link: "https://reactjs.org/",
};

const reactNative = {
  name: "React Native",
  value: featuresEnum.reactNative,
  short: "ReactNative",
  description:
    "React Router is a lightweight, fully-featured routing library for the React JavaScript library",
  link: "https://reactrouter.com/",
};

// const linter = {
//   name: "Linter add Prettier",
//   value: featuresEnum.linter,
//   short: "Linter, Prettier",
//   checked: true,
//   description: "Improve code quality with eslint and prettier",
//   link: "",
// };

/**
 * @param {string[]} features
 */
const getFormatFeatures = (features) => {
  const result = features.flat();
  const hasReact = hasReactFeature(features);
  const hasRouter = hasRouterFeature(features);

  if (hasRouter && !hasReact) {
    logWarnings([
      "If React router is selected, React feature needs to be selected",
    ]);
    result.push(featuresEnum.react);
  }

  return result;
};

/**
 * @returns {Promise<string[]>}
 */
const featuresPrompt = async () => {
  const { features = [] } = await prompt([
    {
      // choices: [react],
      choices: [react, reactNative],
      name: "features",
      type: "checkbox",
      message: chalk.cyan("Check the features needed for your project:"),
      pageSize: 10,
    },
  ]);

  return getFormatFeatures(features.flat());
};

module.exports = { featuresPrompt };