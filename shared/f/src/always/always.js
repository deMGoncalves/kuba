import curry from '@rex/f/src/curry'

const always = (value) =>
  () => value

export default curry(always)
