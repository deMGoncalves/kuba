import and from './and'
import equal from './equal'

/**
 * Compara se o valor é do mesmo tipo da classe
 *
 * @name is
 * @function
 * @access public
 * @param {*} klass Classe a ser comparado
 * @param {*} target Objeto a ser comparado
 * @returns {Boolean} Retorna verdadeiro se tipo for igual
 */
export default (klass, target) =>
  and(target !== null, (equal(target.constructor, klass) || target instanceof klass))
