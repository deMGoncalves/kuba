import compose from 'ramda/src/compose'
import equals from 'ramda/src/equals'
import prop from 'ramda/src/prop'

export default compose(equals(3), prop('nodeType'))
