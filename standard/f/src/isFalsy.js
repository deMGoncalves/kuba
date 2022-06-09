import curry from './curry'

const falsy = (target) =>
  !target

export default curry(falsy)
