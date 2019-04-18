import * as r from 'ramda'

const setEvent = (type, listener, target) => {
  target[r.toLower(type)] = listener
}

export default r.curry((element, [key, value]) =>
  setEvent(key, value, element))
