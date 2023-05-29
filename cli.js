#!/usr/bin/env node

const { execSync } = require('child_process');

const runCommand = command => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (e) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }
  return true;
};

const repoName = process.argv[2];

console.log(`Cloning the repository with name ${repoName}...`);
const checkedOut = runCommand(`git clone --depth 1 https://github.com/mrcyna/ts-project.git ${repoName}`);
if (!checkedOut) process.exit(-1);

console.log(`Installing dependencies...`);
const installedDeps = runCommand(`cd ${repoName} && npm install`);
if (!installedDeps) process.exit(-1);

console.log(`Congratulation! You are ready to use.`);
