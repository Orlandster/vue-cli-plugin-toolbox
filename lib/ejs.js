const util = require('util')
const ejs = require('ejs');

const renderFile = (file, data) => {
    const renderFile = util.promisify(ejs.renderFile);
    return renderFile(file, data);
}

module.exports = {
    renderFile
}