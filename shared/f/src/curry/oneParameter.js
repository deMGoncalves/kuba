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
  function f1 (a0) {
    if (arguments.length === 0 || isGap(a0)) {
      return f1
    }

    return target.call(this, ...arguments)
  }
