import arity from './arity'
import curry from './curry'
import push from './internal/push'

export default curry(arity(2, push))
