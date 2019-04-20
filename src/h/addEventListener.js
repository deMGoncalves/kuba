import curry from 'ramda/src/curry'
import toLower from 'ramda/src/toLower'

const addEventListener = (element, event, listener) => {
  element[toLower(event)] = listener
}

export default curry(addEventListener)
