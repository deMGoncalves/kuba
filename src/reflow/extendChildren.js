import reflow from './'
import greaterNumberOfChildren from './greaterNumberOfChildren'

export default (element, vElement) => {
  const numberOfChildren = greaterNumberOfChildren(element, vElement)

  for (var i = 0; i < numberOfChildren; i++)
    reflow(element.childNodes[i], vElement.childNodes[i], element)

  return element
}
