import curry from './curry'
import equal from './equal'
import isNil from './isNil'
import not from './not'
import or from './or'

/**
 * Compara se o valor é do mesmo tipo da classe
 *
 * @name is
 * @function
 * @access public
 * @param {*} klass Classe a ser comparado
 * @param {*} target Objeto a ser comparado
 * @return {Boolean} Retorna verdadeiro se tipo for igual
 */
const is = (klass, target) =>
  not(isNil(target)) && or(equal(target.constructor, klass), target instanceof klass)

export default curry(is)
