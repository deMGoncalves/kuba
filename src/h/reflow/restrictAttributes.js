import extendAttributes from '@h/extendAttributes'
import getAttributes from './getAttributes'
import getEventListeners from './getEventListeners'
import removeEventListener from './removeEventListener'
import removeAttributes from './removeAttributes'

/**
 * Remove os atributos e eventos antigos e adiciona os novos
 *
 * @name default
 * @function
 * @access private
 * @param {HTMLElement} element Elemento html que esta no DOM
 * @param {HTMLElement} vElement Elemento virtual com os novos atributos e eventos
 * @return {HTMLElement} Elemento com os novos atributos e eventos
 */
export default (element, vElement) =>
  extendAttributes({
    ...getAttributes(vElement),
    ...getEventListeners(vElement) },
  removeEventListener(removeAttributes(element)))
