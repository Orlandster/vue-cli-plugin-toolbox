const { createFile } = require('./lib/fs');
const { renderFile } = require('./lib/ejs');
const { getArguments, getFormattedNames, logError, logSuccess } = require('./lib/utils');

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
          const filePath = `${projectRoot}/src/components/${formattedNames.nameUpperCamelCase}.vue`;

          try {
            await createFile(filePath, renderedFile)
            logSuccess(`Successfully generated the Component! \n${filePath}`);
          } catch (e) {
            logError(e);
          }
        }
    )
}