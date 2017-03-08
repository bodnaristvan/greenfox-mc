const diTools = require('lab-di/tools')();
const path = require('path');
require("babel-core/register");
require("babel-polyfill");

const di = diTools.getDI();
di.registerModule(require('lab-config'), 'config');
di.registerModule(require('lab-config/implementations/memory'), 'config-memory');
di.registerModule(require('lab-config/implementations/file'), 'config-file');

diTools.registerDir(path.resolve(__dirname, 'external'));
diTools.registerDir(path.resolve(__dirname, 'internal'));
diTools.registerDir(path.resolve(__dirname, 'schema'));

export default di;
