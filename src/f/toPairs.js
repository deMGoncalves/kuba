/**
 * Monta uma matriz composta de matriz com chave e valor dos keys e values do objeto alvo
 *
 * @name toPairs
 * @function
 * @access public
 * @param {Object} target Objeto alvo
 * @returns {Array} Uma matriz de key e values
 */
export default (target) =>
  Object.entries(target)
