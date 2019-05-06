const validator = require('validator');
const chalk = require('chalk');
const name = require('./utils.js');

console.log(name);

console.log(validator.isEmail('jacob@aa.com'));

const greenMsg = chalk.green.bold('Success');
console.log(greenMsg);
