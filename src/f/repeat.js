import curry from './curry'

/**
 * Repete um valor uma quantidade expecificada
 *
 * @name repeat
 * @function
 * @access public
 * @param {*} target O elemento a ser repetido
 * @param {Number} n Quantidade de vezes que o elemento sera repetido
 * @returns {Array} Uma matriz com os valores petetido
 */
const repeat = (target, n) =>
  n ? Array(n).toString().split(',').map(() => target) : []

export default curry(repeat)
