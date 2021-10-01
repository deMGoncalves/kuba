import curry from './curry'

const falsy = (value) =>
  !value

export default curry(falsy)
