import arity from './arity'
import curry from './curry'

/**
 * Condicional Or, havalia se pelo um dos valores eh verdadeiro
 *
 * @name or
 * @function
 * @access public
 * @param {*} x Primeiro valor
 * @param {*} y Segundo valor
 * @return {Boolean} Verdadriro ser um dos valores for verdadeiro
 */
const or = (x, ...args) =>
  args.reduce((a, b) => a || b, x)

export default curry(arity(2, or))
