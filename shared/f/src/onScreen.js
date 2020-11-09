import arity from '@rex/f/src/arity'
import curry from '@rex/f/src/curry'
import compose from '@rex/f/src/compose'
import not from '@rex/f/src/not'
import offScreen from '@rex/f/src/offScreen'

export default curry(arity(1, compose(not, offScreen)))
