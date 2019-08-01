import has from 'ramda/src/has'

export default (target) =>
  has('__element__', target)
