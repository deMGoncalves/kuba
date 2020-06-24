import curry from './curry'
import concat from './concat'

/**
 * Retorna uma nova lista, retirando todos os itens (e todas as suas sub-matrizes)
 * e colocá-los em uma nova matriz, em profundidade
 *
 * @func
 * @memberOf f
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b]
 * @param {Array} target A lista que sera achatado
 * @return {Array} Uma lista achatada
 * @see f.unnest
 * @example
 *
 *      f.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
 *      //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
 */
const flatten = (target) =>
  target.reduce(concat, [])

export default curry(flatten)
