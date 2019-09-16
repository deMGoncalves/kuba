const { JSDOM } = require('jsdom')

const jsdom = new JSDOM('<!doctype html><html><body></body></html>')
const { window } = jsdom

/**
 * Extensao do window no global do node
 *
 * @name copyProps
 * @function
 * @access public
 * @args {Object} src Ambiente window, todos os recursos do browser
 * @args {Object} target Global do node, onde iremos extender o window
 * @return {Object} Global do node com as web api do window
 */
function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter((prop) => typeof target[prop] === 'undefined')
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop),
    }), {})
  Object.defineProperties(target, props)
}

global.window = window
global.document = window.document
global.navigator = {
  userAgent: 'node.js',
}

copyProps(window, global)
