import curry from '@rex/f/src/curry'
import gt from '@rex/f/src/gt'
import magic from '@rex/f/src/magic'
import or from '@rex/f/src/or'
import subtract from '@rex/f/src/subtract'

const offScreen = (element) =>
  gt(subtract(or(element[magic('__element__')], element).getBoundingClientRect().top, window.innerHeight), window.innerHeight)

export default curry(offScreen)
