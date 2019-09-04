import equal from './equal'

/**
 * Testa se os dois valores fornecidos nao diferente
 *
 * @name different
 * @function
 * @access public
 * @param {*} x Primeiro valor
 * @param {*} y Segundo valor
 * @returns {Boolean} Verdadeiro se os valores forem diferente
 */
export default (x, y) =>
  !equal(x, y)
