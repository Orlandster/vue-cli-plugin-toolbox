const { createFile } = require('./lib/fs');
const { renderFile } = require('./lib/ejs');

module.exports = (api, opts) => {
    api.registerCommand(
        'generate',
        {
          description: 'Generates Components, Directive and Filters.',
          usage: 'npx vue-cli-service generate'
        },
        async () => {
          const projectRoot = process.cwd();

          console.log(projectRoot)

          let component = {
            name: 'New Component',
            nameSnakeCase: 'new-component',
            nameCamelCase: 'newComponent',
            nameUpperCamelCase: 'NewComponent',
          };

          const renderedFile = await renderFile(`${__dirname}/templates/components/single-file/Template.vue`, component);
          await createFile(`${projectRoot}/src/components/Name.vue`, renderedFile)
        }
    )
}