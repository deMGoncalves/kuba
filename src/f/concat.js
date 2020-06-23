import curry from './curry'

/**
 * Retorna o resultado da concatenação das listas ou strings fornecidas
 *
 * Nota: `f.concat` espera que ambos os argumentos sejam do mesmo tipo,
 * ao contrário do método nativo `Array.prototype.concat`. Vai jogar
 * um erro se você concatenar uma matriz com um valor não-matriz
 *
 * @func
 * @memberOf f
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @sig String -> String -> String
 * @param {Array} target O primeiro valor
 * @param {Array} value O segundo valor
 * @return {Array} O primeiro array com os valores do segundo array
 * @example
 *
 *      f.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 *      f.concat([], []); //=> []
 */
const concat = (target, value) =>
  target.concat(value)

export default curry(concat)
