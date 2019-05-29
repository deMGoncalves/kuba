import curry from 'ramda/src/curry'
import or from 'ramda/src/or'
import toLower from 'ramda/src/toLower'

const addEventListener = (element, eventName, listener) => {
  element.__events__ = or(element.__events__, [])
  element.__events__.push(toLower(eventName))
  element[toLower(eventName)] = listener
}

export default curry(addEventListener)
