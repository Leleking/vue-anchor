import httpStore from "./httpStore";
export default {
  httpStore
};
/* 
import camelCase from 'lodash/camelCase'
const requireModule = require.context('.',false,/\.js$/)
const modules = {}

requireModule.keys().forEach(fileName => {
if (fileName === './index.js') return 

const moduleName = camelCase(
    fileName.replace(/(\.\/|\.js)/g, '')
)
modules[moduleName] = requireModule(fileName)
})

export default modules */
