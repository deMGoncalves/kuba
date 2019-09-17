import * as f from '@f'

/**
 * Valida a existencia do elemento real
 *
 * @name noHasElement
 * @function
 * @access private
 * @param {HTMLElement} element Elmento real que esta no DOM
 * @return {Boolean} Verdadeiro se o elemento real existir
 */
export default (element) =>
  f.isNil(element)
