import curry from './curry'
import isNil from './isNil'
import not from './not'
import or from './or'

/**
 * Verifica se uma propriedade foi definida em um objeto
 * alvo, mesmo que o valor serja imputado como undefined
 *
 * @name has
 * @function
 * @access public
 * @param {String} key Nome da propriedade
 * @param {Object} target Objeto alvo, que sera analisado
 * @return {Boolean} Verdadeiro se a propriedade foi definida
 */
const has = (key, target) =>
  not(isNil(target)) && or(target[key], target.hasOwnProperty(key))

export default curry(has)
