const arity = (n, target) => {
  switch (n) {
    case 0: return () => target()
    case 1: return function (_a) { return target(...arguments) }
    case 2: return function (_a, _b) { return target(...arguments) }
    case 3: return function (_a, _b, _c) { return target(...arguments) }
    default: throw new Error('O primeiro argumento para arity deve ser um número inteiro não negativo e não superior a três')
  }
}

export default arity
