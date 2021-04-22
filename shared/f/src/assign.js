import curry from './curry'

const assign = (target, descriptor) =>
  Object.assign(target, descriptor)

export default curry(assign)
