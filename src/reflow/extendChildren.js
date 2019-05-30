import greaterNumberOfChildren from './greaterNumberOfChildren'
import reflow from './reflow'

export default (element, vElement) => {
  let children = Array(greaterNumberOfChildren(element, vElement)).toString().split(',')

  children
    .map((_, i) => [element.childNodes[i], vElement.childNodes[i], element])
    .forEach((args) => reflow(...args))

  return element
}
