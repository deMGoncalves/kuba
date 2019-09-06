import * as f from '@f'

/**
 * Extende um objeto com mais propriedades
 *
 * @name assign
 * @function
 * @access public
 * @param {*} target Objeto que sera extendido
 * @param {Object} descriptor Novas chaves e valores
 * @returns {*} Objeto com as novas propriedades
 */
const assign = (target, descriptor) =>
  Object.assign(target, descriptor)

export default f.curry(assign)
