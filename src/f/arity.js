import curry from './curry'

/**
 * Redefine o numero de parametros de uma funcao
 *
 * @name arity
 * @function
 * @access public
 * @param {Number} n Numero de parametros
 * @param {Function} target Funcao que tera seus numero de parametros redefinido
 * @return {*} Retorna o valor que a funcao alvo retornara
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
