import curry from './curry'

/**
 * Concatena novos valoes dentro do matrix alvo
 *
 * @name concat
 * @function
 * @access public
 * @param {Array} target Matrix base
 * @param {*} Novo valor a ser adicionado
 * @return {Array} Uma nova matrix com os novos valores
 */
const concat = (target, values) =>
  target.concat(values)

export default curry(concat)
