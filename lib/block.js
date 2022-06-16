/*
 * @Author: mingwei
 * @Date: 2022-06-16 14:05:16
 * @LastEditors: mingwei
 * @LastEditTime: 2022-06-16 15:55:05
 * @FilePath: /qwd-cli/lib/block.js
 * @Description:
 */
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const handlebars = require('handlebars');
const inquirer = require('inquirer');
const ora = require('ora');
const download = require('download-git-repo');
const registerDownRepo = require('../config/registerDownRepo.json');

const spinner = ora(chalk.green('下载中...'));
const cwd = process.cwd();

const validatorInput = answers => {
  console.log(answers.blockName);
  if (!answers.blockName) {
    console.log(chalk.bgRed('项目名称不能为空!'));
    return false;
  }
  return true;
};

const createBlock = async () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'blockTemplate',
        message: '请选择所创建区块!',
        choices: ['antd-form-block', 'block'],
      },
      {
        type: 'input',
        name: 'blockName',
        message: '请填写区块名称!',
      },
    ])
    .then(answers => {
      if (validatorInput(answers)) {
        const targetDir = path.resolve(cwd, answers.blockName || '.');
        if (!fs.existsSync(targetDir)) {
          downloadGitRepo(answers);
        } else {
          // 删除在创建
          console.log(chalk.bgRed('当前路径已存在同名目录，请确定后再试'));
        }
      }
    })
    .catch(err => {
      console.log(chalk.bgRed('ERROR:', err));
    });
};

function downloadGitRepo(answers) {
  const {blockName, blockTemplate} = answers;
  console.log('==>', blockName);
  console.log(chalk.blue('正在拉取' + blockTemplate + '区块'));
  spinner.start();
  console.log(registerDownRepo[blockTemplate]);
  download(
    registerDownRepo[blockTemplate].downUrl,
    blockName,
    {close: true},
    function (err) {
      if (err) {
        spinner.fail(chalk.bgRed('下载区块失败...'));
      } else {
        const targetDir = path.resolve(cwd, answers.projectName || '.');
        const packagePath = `${targetDir}/package.json`;
        const packageContent = fs.readFileSync(packagePath, 'utf8');
        const packageResult = handlebars.compile(packageContent)({
          version: '1.0.0',
          name: blockName,
        });
        fs.writeFileSync(packagePath, packageResult);
        spinner.succeed(chalk.bgGreen('下载成功'));
      }
    },
  );
  // console.log('=>', answers);
}

module.exports = (...args) => {
  return createBlock(...args).then(err => {
    console.log(chalk.red(err));
    process.exit(1);
  });
};
