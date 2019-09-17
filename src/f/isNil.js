import equal from './equal'
import or from './or'

/**
 * Verifica se o valor alvo eh null ou undefined
 *
 * @name isNil
 * @function
 * @access public
 * @param {*} target Valor que sera verificado
 * @return {Boolean} Verdadeiro se o valor alvo for nada
 */
export default (target) =>
  or(equal(target, null), equal(target, undefined))
