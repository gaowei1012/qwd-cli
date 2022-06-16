const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const handlebars = require('handlebars');
const inquirer = require('inquirer');
const ora = require('ora');
const shell = require('shelljs');
const {removeDir} = require('../utils/index');

const spinner = ora(chalk.green('下载中...'));

const cwd = process.cwd();
// 版本号正则
const versionReg = /^([0-9]\d|[0-9])(\.([0-9]\d|\d)){2}$/;

// 验证输入的合法性
const validateInput = answers => {
  if (!answers.projectName) {
    console.log(chalk.bgRed('项目名称不能为空！'));
    return false;
  }
  if (!versionReg.test(answers.version)) {
    console.log(
      chalk.red(
        '请填写正确的版本号：格式(x.x.x) 其中 x 必须为数字，最多两位数：如 0.0.1 或 0.0.11',
      ),
    );
    return false;
  }
  return true;
};

async function create() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'projectTemplate',
        message: '请选择项目模板?',
        choices: ['antd-react-template', 'react-native-template'],
      },
      {
        type: 'input',
        name: 'projectName',
        message: '请填写项目名称',
      },
      {
        type: 'input',
        name: 'version',
        message: '请填写项目版本',
      },
    ])
    .then(answers => {
      // 验证输入的合法性
      if (validateInput(answers)) {
        // 获取当前路径
        const targetDir = path.resolve(cwd, answers.projectName || '.');
        console.log('targetDir', fs.existsSync(targetDir));
        // 判断当前路径下是否有这个文件夹
        if (!fs.existsSync(targetDir)) {
          const {projectTemplate} = answers;
          if (
            projectTemplate === 'antd-react-template' ||
            projectTemplate === 'react-native-template'
          ) {
            copyTemplate(answers);
          } else {
            // downloadGitRepo(answers);
          }
        } else {
          removeDir(targetDir);
          copyTemplate(answers);
          // console.log(chalk.bgRed('当前路径已存在同名目录，请确定后再试'));
        }
      }
    });
}

const copyTemplate = answers => {
  spinner.start('初始化中...');
  const {projectTemplate, projectName, version} = answers;
  // 获取当前路径
  const proPath = path.resolve(__dirname, `../template/${projectTemplate}`);
  console.log('path', proPath);
  const templatePath = path.resolve(cwd, proPath);
  const newTemplateJsonPath = path.resolve(
    cwd,
    `./${projectName}/package.json`,
  );
  const newTemplatePath = path.resolve(cwd, `./${projectName}`);
  shell.cp('-R', templatePath, newTemplatePath);
  const packageContent = fs.readFileSync(newTemplateJsonPath, 'utf8');
  const packageResult = handlebars.compile(packageContent)({
    version,
    name: projectName,
  });
  fs.writeFileSync(newTemplateJsonPath, packageResult);
  spinner.succeed(chalk.bgGreen('初始化成功'));
};

module.exports = (...args) => {
  return create(...args).catch(err => {
    console.log(symbols.error, chalk.red(err));
    process.exit(1);
  });
};
