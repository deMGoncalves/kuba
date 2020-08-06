import * as f from '@rex/f'

/**
 * Valida se os elementos sao diferentes
 *
 * @name elementsAreDifferent
 * @function
 * @access private
 * @param {HTMLElement} element Elemento html que esta no DOM
 * @param {HTMLElement} vElement Elemento virtual
 * @return {Boolean} Verdadeiro se os elementos forem diferente
 */
export default (element, vElement) =>
  f.not(f.equal(element.tagName, vElement.tagName))
