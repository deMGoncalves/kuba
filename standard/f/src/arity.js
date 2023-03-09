function arity (n, functionRef) {
  switch (n) {
    case 0: return () => functionRef()
    case 1: return function (_a) { return functionRef(...arguments) }
    case 2: return function (_a, _b) { return functionRef(...arguments) }
    case 3: return function (_a, _b, _c) { return functionRef(...arguments) }
    default: throw new Error('O primeiro argumento para arity deve ser um número inteiro não negativo e não superior a três')
  }
}

export default arity
