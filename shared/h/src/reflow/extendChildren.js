import * as f from '@rex/f'
import greaterNumberOfChildren from './greaterNumberOfChildren'
import reflow from './reflow'

/**
 * default
 *
 * @name Percorre cada filhos do elemento, executando o processo de reflow
 * @function
 * @access private
 * @param {HTMLElement} element Elemento que esta no DOM
 * @param {HTMLElement} vElement Elemento virtual com o novo estado
 * @return {HTMLElement} Elemento que esta no DOM com o novo estado
 */
export default (element, vElement) =>
  f.always(element)(
    f.forEach(
      f.map(
        f.repeat(null, greaterNumberOfChildren(element, vElement)),
        (_, i) =>
          [element.childNodes[i], vElement.childNodes[i], element]
      ),
      (args) => reflow(...args)))
