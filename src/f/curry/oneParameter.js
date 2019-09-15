import { isGap } from '../gap'

/**
 * So executara a funcao alvo quando o parametro for valido
 *
 * @name curryOne
 * @function
 * @access private
 * @param {*} a0 Parametro valido que nao seja um gap
 * @return {*} O valor que a funcao alvo retornar
 */
export default (target) =>
  function (a0) {
    if (arguments.length === 0 || isGap(a0)) {
      return target
    }

    return target(a0)
  }
