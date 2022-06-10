import curry from './curry'

const split = (target, separator) => (
  String(target).split(separator)
)

export default curry(split)
