import appendChildren from './appendChildren'
import extendAttributes from './extendAttributes'

/**
 * Cria um elemento html
 *
 * @name default
 * @function
 * @access private
 * @param {String} tagName Nome da tag html
 * @param {Object} attributes Atributos do elemento html
 * @param {Array} children Elementos filhos do elemento html
 * @returns {HTMLElement} Um elemento html
 */
export default (tagName, attributes, children) =>
  appendChildren(children, extendAttributes(attributes, document.createElement(tagName, { is: attributes.is })))
