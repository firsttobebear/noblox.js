// Includes
const http = require('./http.js')
const settings = require('../../settings.json')

// Args
exports.required = ['proxyURL']

// Docs
/**
 * @category Utility
 * @param {Uri} URL - The proxy server URL.
 * @returns {void}
 * @example const noblox = require("noblox.js")
 * noblox.setProxy('http://proxy.com')
**/

// Define
exports.func = function (opt) {
  settings.proxyURL = opt.proxyURL
}
