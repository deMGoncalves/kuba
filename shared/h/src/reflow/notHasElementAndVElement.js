import * as f from '@rex/f'
import notHasElement from './notHasElement'
import notHasVElement from './notHasVElement'

/**
 * Verifica a existencia do elemento e do elemento virtual
 *
 * @name notHasElementAndVElement
 * @function
 * @access private
 * @param {HTMLElement} element Elemento relal que esta no DOM
 * @param {HTMLElement} vElement Elemento virtual que fora criado para comparacao
 * @return {Boolean} Verdadeiro se os elemento e virtual nao existir
 */
export default (element, vElement) =>
  f.and(notHasElement(element), notHasVElement(null, vElement))
