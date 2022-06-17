/*
 * @Author: mingwei
 * @Date: 2022-06-16 14:05:16
 * @LastEditors: mingwei
 * @LastEditTime: 2022-06-17 13:49:20
 * @FilePath: /dg-cli/lib/block.js
 * @Description:
 */
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');
const ora = require('ora');
const shell = require('shelljs');

const spinner = ora(chalk.green('下载中...'));
const cwd = process.cwd();

// const validatorInput = answers => {
//   if (!answers.blockName) {
//     console.log(chalk.bgRed('项目名称不能为空!'));
//     return false;
//   }
//   return true;
// };

async function createBlock() {
  // 动态加载区块下的文件夹，作为选择目标
  const dirs = fs.readdirSync(path.resolve(__dirname, '../block'));
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'blockTemplate',
        message: '请选择所创建区块!',
        choices: dirs,
      },
      // {
      //   type: 'input',
      //   name: 'blockName',
      //   message: '请填写区块名称!',
      // },
    ])
    .then(answers => {
      console.log(answers['blockTemplate']);
      // const targetDir = path.resolve(cwd, answers.blockName || '.');
      if (!fs.existsSync(answers['blockTemplate'])) {
        fs.mkdirSync(answers['blockTemplate']);
        copyTemplate(answers);
      } else {
        // 删除在创建
        console.log(chalk.bgRed('当前路径已存在同名目录，请确定后再试'));
      }
    })
    .catch(err => {
      console.log(chalk.bgRed('ERROR:', err));
    });
}

const copyTemplate = answers => {
  const {blockName, blockTemplate} = answers;
  spinner.start('初始化中...');

  // 拷贝文件
  shell.cp(
    '-R',
    path.resolve(cwd, path.resolve(__dirname, `../block/${blockTemplate}`)),
    path.resolve(cwd),
  );
  // copyFile(
  //   path.resolve(__dirname, `../block/${blockTemplate}`),
  //   path.resolve(__dirname, `../${blockName}`),
  // );
  spinner.succeed(chalk.bgGreen('加载区块成功'));
};

const copyFile = (orginalUrl, targetUrl) => {
  spinner.info('📃文件拷贝中...');
  console.log(chalk.cyan(orginalUrl), '==>', chalk.green(targetUrl));
  try {
    const oldDir = fs.statSync(orginalUrl);
    // const fileName = orginalUrl.split('/')[orginalUrl.split('/').length - 1];
    // fs.mkdirSync(`${targetUrl}/${fileName}`);
    if (oldDir.isFile()) {
      fs.writeFileSync(targetUrl, fs.readFileSync(orginalUrl));
    } else if (oldDir.isDirectory()) {
      fs.readdirSync(orginalUrl).forEach(item => {
        copyFile(`${orginalUrl}/${item}`, `${targetUrl}/${item}`);
      });
    }
  } catch (err) {
    console.log(chalk.bgRed('创建失败，请检查!', JSON.stringify(err)));
    return false;
  }
};

module.exports = (...args) => {
  return createBlock(...args).catch(err => {
    console.log(symbols.error, chalk.red(err));
    process.exit(1);
  });
};
