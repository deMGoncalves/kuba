import curry from './curry'
import equal from './equal'

/**
 * Testa se os dois valores fornecidos nao diferente
 *
 * @name different
 * @function
 * @access public
 * @param {*} x Primeiro valor
 * @param {*} y Segundo valor
 * @return {Boolean} Verdadeiro se os valores forem diferente
 */
const different = (x, y) =>
  !equal(x, y)

export default curry(different)
