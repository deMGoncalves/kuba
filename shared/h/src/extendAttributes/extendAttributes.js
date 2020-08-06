import * as f from '@rex/f'
import resolveExtend from './resolveExtend'

/**
 * Extende as propriedades, eventos e classes para o elemento alvo
 *
 * @name extendAttributes
 * @function
 * @access private
 * @param {Object} attributes Atributos, classes e evento do elemento
 * @param {HTMLElement} element Elemento html
 * @return {HTMLElement} Elemento html alvo
 */
export default (attributes, element) =>
  f.always(element)(f.forEach(f.toPairs(attributes), resolveExtend(element)))
