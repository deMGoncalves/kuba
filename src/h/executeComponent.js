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
const executeComponent = (component, attributes, children) =>
  component(attributes, children)

export default executeComponent
