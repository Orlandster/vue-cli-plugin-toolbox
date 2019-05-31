const chalk = require('chalk');

const getArguments = () => {
    return process.argv.slice(2);;
}

const getFormattedNames = (rawPath) => {
    const path = extractPathFromName(rawPath);
    const name = extractNameFromPath(rawPath);

    return {
        name,
        nameSnakeCase: toSnakeCase(name),
        nameSpinalCase: toSpinalCase(name),
        nameUpperCamelCase: toUpperCamelCase(name),
        path
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

const extractPathFromName = (name) => {
    return name.substring(0, name.lastIndexOf('/') + 1);
}

const extractNameFromPath = (name) => {
    return name.substring(name.lastIndexOf('/') + 1, name.length)
}

module.exports = {
    getArguments,
    getFormattedNames,
    logSuccess,
    logError,
    extractPathFromName,
    extractNameFromPath
}
