import { compose, equal, prop } from '../../share'

export default compose(equal(3), prop('nodeType'))
