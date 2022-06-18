import compose from './compose'
import curry from './curry'
import isEmpty from './isEmpty'
import not from './not'

const isFully = compose(not, isEmpty)

export default curry(isFully)
