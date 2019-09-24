import curry from './curry'
import equal from './equal'
import isNil from './isNil'
import not from './not'
import or from './or'

/**
 * Compara se a instancia eh o mesmo da classe, esta funcao
 * auxiliar eh usada para os caso em que o temos o decorator
 * paint sobre a classe
 *
 * @name sameInstanceof
 * @function
 * @access private
 * @param {*} klass Classe base para validacao
 * @param {*} target Instancia que sera validada
 * @return {Boolean} Verdadeiro se for a mesma instancia
 */
const sameInstanceof = (klass, target) =>
  or(target instanceof klass, target.__target__ instanceof klass)

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
  not(isNil(target)) && or(equal(target.constructor, klass), sameInstanceof(klass, target))

export default curry(is)
