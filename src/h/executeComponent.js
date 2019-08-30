/**
 * Executa um component function
 *
 * @name executeComponent
 * @function
 * @access private
 * @param {Function} component Um componente customizado
 * @param {Object} attributes Atributos do componente
 * @param {Array} children Uma matriz de elementos filhos
 * @returns {HTMLElement} Um elemento html
 */
export default (component, attributes, children) =>
  component(attributes, children)
