import curry from './curry'

const arity = (n, func) => {
  switch (n) {
    case 0: return () => func()
    case 1: return function (_a) { return func(...arguments) }
    case 2: return function (_a, _b) { return func(...arguments) }
    case 3: return function (_a, _b, _c) { return func(...arguments) }
    default: throw new Error('O primeiro argumento para arity deve ser um número inteiro não negativo e não superior a três')
  }
}

export default curry(arity)
