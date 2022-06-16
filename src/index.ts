#!/usr/bin/env node

const {program} = require('commander');
const createBlock = require('../lib/block');
const createProject = require('../lib/create');

const packageConfig = require('../package.json');

program.version(packageConfig.version);

// 创建项目模板
program.command('create').description('创建项目模板').action(createProject);

// 创建区块
// program.command('block').description('创建项目区块').action(createBlock);

// 查看模板列表
// program.command('ls').description('查看当前所有模板').action();

program.parse(process.argv);
