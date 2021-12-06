import curry from './curry'

const typeOf = (value) =>
  typeof value

export default curry(typeOf)
