import arity from './arity'
import magic from '@kuba/magic'

export default function (functionRef) {
  const n = functionRef.length
  const evaluate = (...args) => {
    const method = magic[functionRef.name]
    const evaluate = (value) => (
      value?.[method]?.() ?? value
    )
    return functionRef(...args.map(evaluate))
  }
  return arity(n, evaluate)
}
