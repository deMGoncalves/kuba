import * as f from '@rex/f'
import hasTarget from './hasTarget'

/**
 * Valida se ambos os elemento tem contexto diferentes
 *
 * @name sameObject
 * @function
 * @access private
 * @param {HTMLElement} element Elemento html que esta no DOM
 * @param {HTMLElement} vElement Elmento html virtual
 * @return {Boolean} Verdadeiro se ambos nao tiverem o mesmo contexto
 */
export default (element, vElement) =>
  f.and(f.and(hasTarget(element), hasTarget(vElement)), f.not(f.equal(element.__target__, vElement.__target__)))
