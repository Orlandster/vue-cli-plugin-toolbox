const { createFile } = require('./lib/fs');
const { renderFile } = require('./lib/ejs');
const { getArguments, getFormattedNames } = require('./lib/utils');

module.exports = (api) => {
    api.registerCommand(
        'generate',
        {
          description: 'Generates Components, Directive and Filters.',
          usage: 'npx vue-cli-service generate',
        },
        async () => {
          const projectRoot = process.cwd();
          const nameArg = getArguments()[1];
          const formattedNames = getFormattedNames(nameArg);
          const renderedFile = await renderFile(`${__dirname}/templates/components/single-file/Template.vue`, formattedNames);
          await createFile(`${projectRoot}/src/components/${formattedNames.nameUpperCamelCase}.vue`, renderedFile)
        }
    )
}