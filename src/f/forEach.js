import curry from './curry'

/**
 * Executa uma funcao callback para cada elemento da matrix
 *
 * @name forEach
 * @function
 * @access public
 * @param {Array} target Array de valores que sera usando para repassar a funcao
 * @param {Function} callback Funcao callback que recebe o valor de um indice do array
 * @returns {undefined} Nao retorna nada
 */
const forEach = (target, callback) =>
  target.forEach(callback)

export default curry(forEach)
