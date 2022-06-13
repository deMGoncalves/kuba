import curry from './curry'

const lt = (value, delimiter) =>
  value < delimiter

export default curry(lt)
