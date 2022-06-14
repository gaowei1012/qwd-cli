/*
 * @Author: mingwei
 * @Date: 2022-06-14 17:20:04
 * @LastEditors: mingwei
 * @LastEditTime: 2022-06-14 17:20:05
 * @FilePath: /dg-cli/src/templates/index.js
 * @Description:
 */
const createTemplate = require("./createTemplate");
const features = require("./features");

module.exports = {
  ...createTemplate,
  ...features,
};
