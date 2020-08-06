import curry from './curry'

/**
 * Extende um objeto com mais propriedades
 *
 * @name assign
 * @function
 * @access public
 * @param {*} target Objeto que sera extendido
 * @param {Object} descriptor Novas chaves e valores
 * @return {*} Objeto com as novas propriedades
 */
const assign = (target, descriptor) =>
  Object.assign(target, descriptor)

export default curry(assign)
