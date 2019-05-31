const util = require('util')
const fs = require('fs');

const writeFile = util.promisify(fs.writeFile);

const createFile = (path, content) => {
    return writeFile(path, content);
}

module.exports = {
    createFile
}
