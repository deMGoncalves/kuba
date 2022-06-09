import curry from './curry'

const every = (targets, predicate) =>
  targets.every(predicate)

export default curry(every)
