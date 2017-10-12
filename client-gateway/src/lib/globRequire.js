import glob from 'glob'
import path from 'path'

const globRequire = (route) =>
  glob.sync(`!${route}/index.js`)
  .forEach(file => {
    console.log(file)
    // require(path.resolve(file))
  })

export default globRequire

// globRequire(__dirname)
