const util = require('util')
const fs = require('fs');
const { logError } = require('./utils');

const writeFile = util.promisify(fs.writeFile);

const createFile = (path, content) => {
    if(fs.existsSync(path)) {
        logError(`A Component with this name already exists! \n${path}`);
    }

    return writeFile(path, content);
}

module.exports = {
    createFile
}
