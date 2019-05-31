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

module.exports = {
    getArguments,
    getFormattedNames
}
