/**
 * Encontra o numero maior de filhos
 *
 * @name greaterNumberOfChildren
 * @function
 * @access private
 * @param {HTMLElement} element Elemento que eta no DOM
 * @param {HTMLElement} vElement Emento virtual
 * @return {Number} Maior numero de filhos
 */
export default (element, vElement) =>
  Math.max(element.childNodes.length, vElement.childNodes.length)
