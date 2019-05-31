const util = require('util')
const fs = require('fs');
const fse = require('fs-extra')
const { logError, extractPathFromName } = require('./utils');

const writeFile = util.promisify(fs.writeFile);

const createFile = async (path, content) => {
    if(fs.existsSync(path)) {
        logError(`A Component with this name already exists! \n${path}`);
    }

    try {
        await createMissingDirs(extractPathFromName(path));
    } catch(e) {
        logError(e);
    }

    return writeFile(path, content);
}

const createMissingDirs = (path) => {
    return fse.ensureDir(path);
}

module.exports = {
    createFile
}
