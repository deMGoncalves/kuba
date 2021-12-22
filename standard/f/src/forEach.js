import curry from './curry'
import dunder from './dunder'

const evaluate = dunder('forEach')

const forEach = (x, callback) =>
  evaluate(x).forEach(callback)

export default curry(forEach)
