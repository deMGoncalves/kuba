import * as f from '@f'

/**
 * Valida se o elemento e vElemento sao TextNode
 *
 * @name elementsIsTextNode
 * @function
 * @access private
 * @param {HTMLElement} element Elemento que esta no DOM
 * @param {HTMLElement} vElement Elemento virtual
 * @return {Boolean} Verdadeiro se os elementos sao TextNode
 */
export default (element, vElement) =>
  f.and(f.equal(element.nodeType, 3), f.equal(vElement.nodeType, 3))
