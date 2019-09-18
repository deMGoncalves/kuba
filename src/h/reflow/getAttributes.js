/**
 * Monta um objeto com os atributos de um elemento
 *
 * @name default
 * @function
 * @access public
 * @param {HTMLElement} vElement Atributos de um elemento
 * @return {Object} Atributos de um elemento
 */
export default (vElement) =>
  []
    .slice
    .call(vElement.attributes)
    .reduce((reducer, { name, value }) =>
      ({ ...reducer, [name]: value }), {})
