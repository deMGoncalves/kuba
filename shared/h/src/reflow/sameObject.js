import * as f from '@rex/f'
import hasTarget from './hasTarget'

/**
 * Valida se ambos os elemento tem o mesmo contexto
 *
 * @name sameObject
 * @function
 * @access private
 * @param {HTMLElement} element Elemento html que esta no DOM
 * @param {HTMLElement} vElement Elmento html virtual
 * @return {Boolean} Verdadeiro se ambos tem o mesmo contexto
 */
export default (element, vElement) =>
  f.and(f.and(hasTarget(element), hasTarget(vElement)), f.equal(element.__target__, vElement.__target__))
