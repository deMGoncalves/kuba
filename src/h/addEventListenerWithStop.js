import curry from 'ramda/src/curry'
import addEventListener from './addEventListener'

const addEventListenerWithStop = (element, eventName, listener) =>
  addEventListener(element, eventName.slice(0, -5), (e) => {
    e.stopPropagation()
    listener(e)
  })

export default curry(addEventListenerWithStop)
