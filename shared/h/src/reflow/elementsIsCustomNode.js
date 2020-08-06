import * as f from '@rex/f'
import isCustomElement from './isCustomElement'

/**
 * Valida se o tagName do elemento e vElemento sao um elemento customizado
 *
 * @name elementsIsCustomNode
 * @function
 * @access private
 * @param {HTMLElement} element Elemento html que esta no DOM
 * @param {HTMLElement} vElement Elemento virtual
 * @return {Boolean} Verdadeiro se os elementos forem um elemento customizado
 */
export default (element, vElement) =>
  f.and(isCustomElement(element.tagName), isCustomElement(vElement.tagName))
