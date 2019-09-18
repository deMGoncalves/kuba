import * as f from '@f'

/**
 * Monta um objeto com os atributos de um elemento
 *
 * @name default
 * @function
 * @access private
 * @param {HTMLElement} vElement Atributos de um elemento
 * @return {Object} Atributos de um elemento
 */
export default (vElement) =>
  []
    .slice
    .call(f.or(vElement.attributes, []))
    .reduce((reducer, { name, value }) =>
      ({ ...reducer, [name]: value }), {})
