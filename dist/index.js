
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./1bch-sdk.cjs.production.min.js')
} else {
  module.exports = require('./1bch-sdk.cjs.development.js')
}
