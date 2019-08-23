import curry from 'ramda/src/curry'

const setClassName = (element, className, target) =>
  (element[className] = [].concat(target).join(' '))

export default curry(setClassName)
