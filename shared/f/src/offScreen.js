import curry from '@rex/f/src/curry'
import gt from '@rex/f/src/gt'
import subtract from '@rex/f/src/subtract'

const offScreen = (element) =>
  gt(subtract(element.getBoundingClientRect().top, window.innerHeight), window.innerHeight)

export default curry(offScreen)
