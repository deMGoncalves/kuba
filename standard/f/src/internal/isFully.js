import compose from './compose'
import isEmpty from './isEmpty'
import not from './not'

const isFully = compose(not, isEmpty)

export default isFully
