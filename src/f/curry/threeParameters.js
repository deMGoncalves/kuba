import oneParameter from './oneParameter'
import twoParameters from './twoParameters'
import { isGap } from '../gap'

/**
 * So executara a funcao alvo quando os tres parametros forem validos
 *
 * @name twoParameters
 * @function
 * @access private
 * @param {*} a0 Parametro valido que nao seja um gap
 * @param {*} a1 Parametro valido que nao seja um gap
 * @param {*} a2 Parametro valido que nao seja um gap
 * @return {*} O valor que a funcao alvo retornar
 */
export default (target) =>
  function (a0, a1, a2) {
    switch (arguments.length) {
      case 0:
        return target
      case 1:
        return isGap(a0)
          ? target
          : twoParameters((_a1, _a2) => target(a0, _a1, _a2))
      case 2:
        return isGap(a0) && isGap(a1)
          ? target
          : isGap(a0)
            ? twoParameters((_a0, _a2) => target(_a0, a1, _a2))
            : isGap(a1)
              ? twoParameters((_a1, _a2) => target(a0, _a1, _a2))
              : oneParameter((_a2) => target(a0, a1, _a2))
      default:
        return isGap(a0) && isGap(a1) && isGap(a2)
          ? target
          : isGap(a0) && isGap(a1)
            ? twoParameters((_a0, _a1) => target(_a0, _a1, a2))
            : isGap(a0) && isGap(a2)
              ? twoParameters((_a0, _a2) => target(_a0, a1, _a2))
              : isGap(a1) && isGap(a2)
                ? twoParameters((_a1, _a2) => target(a0, _a1, _a2))
                : isGap(a0)
                  ? oneParameter((_a0) => target(_a0, a1, a2))
                  : isGap(a1)
                    ? oneParameter((_a1) => target(a0, _a1, a2))
                    : isGap(a2)
                      ? oneParameter((_a2) => target(a0, a1, _a2))
                      : target(a0, a1, a2)
    }
  }
