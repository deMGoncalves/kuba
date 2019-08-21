import curry from 'ramda/src/curry'
import addEventListener from './addEventListener'

const addEventListenerWithStopAndPrevent = (element, eventName, listener) =>
  addEventListener(element, eventName.slice(0, -13), (e) => {
    e.preventDevaul()
    e.stopPropagation()
    listener(e)
  })

export default curry(addEventListenerWithStopAndPrevent)
