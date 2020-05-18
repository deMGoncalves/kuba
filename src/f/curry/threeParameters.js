import oneParameter from './oneParameter'
import twoParameters from './twoParameters'
import { isGap } from '../gap'

/**
 * Função de curry otimizado para três argumentos.
 *
 * @private
 * @category Function
 * @param {Function} target A função para o curry.
 * @return {Function} A função curried.
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
