import curry from './curry'

/**
 * Operador logico and
 *
 * @name adn
 * @function
 * @access public
 * @param {*} x Primeiro valor
 * @param {*} y Segundo valor
 * @return {Boolean} Verdadeio se a condicao for verdadeiro
 */
const and = (x, y) =>
  x && y

export default curry(and)
