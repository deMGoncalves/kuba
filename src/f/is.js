import and from './and'
import curry from './curry'
import different from './different'
import equal from './equal'
import or from './or'

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
const is = (klass, target) =>
  and(different(target, null), or(equal(target.constructor, klass), target instanceof klass))

export default curry(is)
