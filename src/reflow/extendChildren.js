import greaterNumberOfChildren from './greaterNumberOfChildren'
import reflow from './reflow'
import reflowChildren from './reflowChildren'

export default (element, vElement) => {
  const numberOfChildren = greaterNumberOfChildren(element, vElement)

  for (var i = 0; i < numberOfChildren; i++) {
    reflow(element.childNodes[i], vElement.childNodes[i], element)
  }

  return element
}
