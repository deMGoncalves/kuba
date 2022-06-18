import curry from './curry'

const i = (func) =>
  (target, predicate, i = 0) =>
    func(target, (...args) => predicate(...args, i++))

export default curry(i)
