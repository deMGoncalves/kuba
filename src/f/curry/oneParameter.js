import { isGap } from '../gap'

/**
 * Função de curry otimizado para um argumento.
 *
 * @private
 * @category Function
 * @param {Function} target A função para o curry.
 * @return {Function} A função curried.
 */
export default (target) =>
  function (a0) {
    if (arguments.length === 0 || isGap(a0)) {
      return target
    }

    return target(a0)
  }
