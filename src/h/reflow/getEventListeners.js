import * as f from '@f'
/**
 * Monta um objeto com todos os eventos adicionado ao elemento
 *
 * @name default
 * @function
 * @access private
 * @param {HTMLElement} vElement Elemento que contem os eventos
 * @return {Object} Objeto com todos os eventos
 */
export default (vElement) =>
  []
    .slice
    .call(f.or(vElement.__events__, []))
    .reduce((reducer, event) =>
      ({ ...reducer, [event]: vElement[event] }), {})
