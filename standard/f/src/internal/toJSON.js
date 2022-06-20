import dunder from '../dunder'
import is from '../is'

const toJSON = (target) => (
  is(String, target)
    ? JSON.parse(target)
    : dunder('toJSON', target)
)

export default toJSON
