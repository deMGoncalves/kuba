import curry from './curry'

/**
 * Redefine o numero de parametros de uma funcao
 *
 * @name arity
 * @function
 * @access public
 * @param {Number} n Numero de parametros
 * @param {Function} target Funcao que tera seus numero de parametros redefinido
 * @returns {*} Retorna o valor que a funcao alvo retornara
 */
const arity = (n, target) => {
  switch (n) {
    case 0: return () => target()
    case 1: return (a0) => target(a0)
    case 2: return (a0, a1) => target(a0, a1)
    case 3: return (a0, a1, a2) => target(a0, a1, a2)
    default: throw new Error('O primeiro argumento para arity deve ser um número inteiro não negativo não superior a três')
  }
}

export default curry(arity)
