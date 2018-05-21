// import camelCase from 'lodash/camelCase'
// const requireModule = require.context('.', false, /\.js$/)
import filter from './filter'
const modules = {
  filter
}

// requireModule.keys().forEach(fileName => {
//   // Don't register this file as a Vuex module
//   if (fileName === './index.js') return

//   const moduleName = camelCase(
//     fileName.replace(/(\.\/|\.js)/g, '')
//   )

//   modules[moduleName] = requireModule(fileName)

//   // for (let key in requireModule(fileName).default) {
//   //   modules[moduleName][key] = requireModule(fileName).default[key]
//   // }
//   // requireModule(fileName).default.keys().forEach(action => {
//   //   modules[moduleName][action] = requireModule(fileName).default[action]
//   // })

// })

export default modules
