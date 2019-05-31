const chalk = require('chalk');

const getArguments = () => {
    return process.argv.slice(2);;
}

const getFormattedNames = (name) => {
    return {
        name,
        nameSnakeCase: toSnakeCase(name),
        nameSpinalCase: toSpinalCase(name),
        nameUpperCamelCase: toUpperCamelCase(name),
    }
}

const toUpperCamelCase = (str) => {
    return str
      .trim()
      .replace(/\w\S*/g, function(txt){
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      })
      .replace(/ /g,"");
}

const toSpinalCase = (str) => {
    return str
      .trim()
      .toLowerCase()
      .replace(/ /g,"-")
      .replace(/_/g,"-");
}

const toSnakeCase = (str) => {
    return str
      .trim()
      .toLowerCase()
      .replace(/ /g,"_");
}

const logSuccess = (msg) => {
    console.log(chalk.green(`\n${msg}\n`));
}

const logError = (msg) => {
    console.log(chalk.red(`\n${msg}\n`));
    process.exit();
}

module.exports = {
    getArguments,
    getFormattedNames,
    logSuccess,
    logError
}
