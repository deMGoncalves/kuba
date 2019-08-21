import curry from 'ramda/src/curry'
import addEventListener from './addEventListener'

const addEventListenerWithPrevent = (element, eventName, listener) =>
  addEventListener(element, eventName.slice(0, -8), (e) => {
    e.preventDefault()
    listener(e)
  })

export default curry(addEventListenerWithPrevent)
