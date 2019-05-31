const appRoot = require('app-root-path');
const ejs = require('ejs');

module.exports = (api, opts) => {
    api.registerCommand(
        'generate',
        {
          description: 'Generates Components, Directive and Filters.',
          usage: 'npx vue-cli-service generate'
        },
        () => {
          const projectRoot = require('app-root-path').resolve(process.cwd());

          let component = {
            name: 'New Component',
            nameSnakeCase: 'new-component',
            nameCamelCase: 'newComponent',
            nameUpperCamelCase: 'NewComponent',
          };

          ejs.renderFile(`${__dirname}/templates/components/single-file/Template.vue`, component, function(err, str){
            console.log(str, err);
          });
        }
    )
}