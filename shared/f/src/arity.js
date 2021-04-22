import curry from './curry'

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
