import curry from './curry'

/**
 * Executar uma funcao callback para cada elemento da matrix e devolve o retorno no lugar do elemento
 *
 * @name map
 * @function
 * @access public
 * @param {Array} target Matrix com o valoes alvos
 * @param {Function} callback Funcao callback que trata cada valor
 * @returns {Array} Uma nova matrix com os retornos mapeado
 */
const map = (target, callback) =>
  target.map(callback)

export default curry(map)
