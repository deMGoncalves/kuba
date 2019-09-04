import curry from './curry'

/**
 * Condicional Or, havalia se pelo um dos valores eh verdadeiro
 *
 * @name or
 * @function
 * @access public
 * @param {*} x Primeiro valor
 * @param {*} y Segundo valor
 * @returns {Boolean} Verdadriro ser um dos valores for verdadeiro
 */
const or = (x, y) =>
  x || y

export default curry(or)
