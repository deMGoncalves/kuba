import curry from './curry'
import dec from './dec'
import len from './len'

const last = (array) =>
  array[dec(len(array))]

export default curry(last)
