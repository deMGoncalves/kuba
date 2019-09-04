import oneParameter from './oneParameter'
import twoParameters from './twoParameters'
import threeParameters from './threeParameters'

/**
 * Escolhe qual curry deve encapsular a funcao alvo
 *
 * @name curry
 * @function
 * @access public
 * @param {Function} Funcao alvo, que sera encapsulado
 * @returns {Function} A funcao alvo encapsulado
 */
export default (target) =>
  [null, oneParameter, twoParameters, threeParameters][target.length](target)
