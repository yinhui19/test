<<<<<<< HEAD
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
   config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
   config = rewireLess.withLoaderOptions({
     modifyVars: { "@primary-color": "#2e8b57" },
   })(config, env);
    return config;
=======
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
   config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
   config = rewireLess.withLoaderOptions({
     modifyVars: { "@primary-color": "#2e8b57" },
   })(config, env);
    return config;
>>>>>>> e73b37384cdfa7bef3aee03970ef88dd3869ebb7
  };