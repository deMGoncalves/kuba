import oneParameter from './oneParameter'
import { isGap } from '../gap'

/**
 * Função de curry de dois argumentos otimizada.
 *
 * @private
 * @category Function
 * @param {Function} target A função para o curry.
 * @return {Function} A função curried.
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
