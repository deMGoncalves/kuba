import curry from './curry'

/**
 * Junta os elemento de uma matrix com um separador pre determinado
 *
 * @name join
 * @function
 * @access public
 * @param {Array} target Matrix que sera juntado
 * @param {String} separator Elemento que ira separa os itens da matrix
 * @return {String} Um literal com posto pelo item de uma matrix separa por um separador
 */
const join = (target, separator) =>
  target.join(separator)

export default curry(join)
