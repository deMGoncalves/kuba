import curry from '@rex/f/src/curry'

const len = (x) =>
  Object.keys(x).length

export default curry(len)
