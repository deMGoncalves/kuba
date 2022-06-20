import curry from './curry'
import dunder from './dunder'
import is from './is'
import _toJSON from './internal/toJSON'

const evaluate = dunder('toJSON')

const toJSON = (target) => (
  is(String, target)
    ? _toJSON(target)
    : evaluate(target)
)

export default curry(toJSON)
