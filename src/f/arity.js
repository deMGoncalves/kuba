import curry from './curry'

/**
 * Redefine o numero de parametros de uma funcao
 *
 * @func
 * @memberOf f
 * @since v0.1.0
 * @category Logic
 * @sig (a, b) -> (*) -> *
 * @param {Number} n Número de parametros a função alvo
 * @param {Function} target Função alvo
 * @return {Any} Retorna o retorna da execução da função alvo
 * @example
 *
 *      const add = (x, ...args) => args.reduce((a, b) => a + b, x)
 *      const g = f.arity(2, add)
 *      g(1, 2, 3) //=> 3
 */
const arity = (n, target) => {
  switch (n) {
    case 0: return () => target()
    case 1: return function (_a0) { return target(...arguments) }
    case 2: return function (_a0, _a1) { return target(...arguments) }
    case 3: return function (_a0, _a1, _a2) { return target(...arguments) }
    default: throw new Error('O primeiro argumento para arity deve ser um número inteiro não negativo e não superior a três')
  }
}

export default curry(arity)
