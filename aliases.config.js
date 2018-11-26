const path = require('path')

function resolveSrc(_path) {
  return path.join(__dirname, _path)
}

const aliases = {
  '@src': 'src',
  '@router': 'src/router',
  '@views': 'src/views',
  '@layouts': 'src/layouts',
  '@components': 'src/components',
  '@helpers': 'src/helpers',
  '@plugins': 'src/plugins',
  '@assets': 'src/assets',
  '@utils': 'src/utils',
  '@state': 'src/state',
  '@design': 'src/design/index.scss',
  '@mock': 'tests/mock-api/resources/'
}

module.exports = {
  webpack: {},
  jest: {}
}

for (const alias in aliases) {
  module.exports.webpack[alias] = resolveSrc(aliases[alias])
  module.exports.jest['^' + alias + '/(.*)$'] =
    '<rootDir>/' + aliases[alias] + '/$1'
}
