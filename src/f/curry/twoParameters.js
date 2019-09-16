import oneParameter from './oneParameter'
import { isGap } from '../gap'

/**
 * So executara a funcao alvo quando os dois parametros forem validos
 *
 * @name curryTwo
 * @function
 * @access private
 * @param {*} a0 Parametro valido que nao seja um gap
 * @param {*} a1 Parametro valido que nao seja um gap
 * @return {*} O valor que a funcao alvo retornar
 */
export default (target) =>
  function (a0, a1) {
    switch (arguments.length) {
      case 0:
        return target
      case 1:
        return isGap(a0)
          ? target
          : oneParameter((_a1) => target(a0, _a1))
      default:
        return isGap(a0) && isGap(a1)
          ? target
          : isGap(a0)
            ? oneParameter((_a0) => target(_a0, a1))
            : isGap(a1)
              ? oneParameter((_a1) => target(a0, _a1))
              : target(a0, a1)
    }
  }
