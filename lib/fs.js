const util = require('util')
const fs = require('fs');

const writeFile = util.promisify(fs.writeFile);

const createFile = (path, content) => {
    if (fs.existsSync(path)) {
        console.log(`\nA Component with this name already exists! \n${path}\n`);
        process.exit();
    }

    return writeFile(path, content);
}

module.exports = {
    createFile
}
