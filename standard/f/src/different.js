import arity from './arity'
import compose from './compose'
import curry from './curry'
import equal from './equal'
import not from './not'

const different = compose(not, equal)

export default curry(arity(2, different))
