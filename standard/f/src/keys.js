import curry from './curry'

const keys = (object) =>
  Object.keys(object)

export default curry(keys)
