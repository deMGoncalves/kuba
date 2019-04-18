import reflow from './'
import greaterNumberOfChildren from './greaterNumberOfChildren'

export default (element, vElement) => {
  for (var i = 0; i < greaterNumberOfChildren(element, vElement); i++) {
    reflow(element.childNodes[i], vElement.childNodes[i], element)
  }
}
