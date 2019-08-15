import curry from 'ramda/src/curry'

const setClassName = (element, className, target) =>
  (element[className] = target)

export default curry(setClassName)
