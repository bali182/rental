const chalk = require('chalk');
const path = require('path');
const fs = require('fs');

const ok = '✓';
const nok = '✖';

const warn = message => console.log(chalk.yellow(message));
const success = message => console.log(chalk.green(message));
const error = message => console.log(chalk.red(message));
const fatalError = message => { error(message); process.exit(1); };

const lf = (n = 1) => console.log(new Array(n).fill('').join('\n'));
const json = (basedir, relPath) => JSON.parse(fs.readFileSync(path.join(basedir, relPath)))

module.exports = {
  warn,
  error,
  fatalError,
  success,
  lf,
  ok,
  nok,
  json,
};