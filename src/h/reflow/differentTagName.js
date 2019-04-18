import { different } from '../../share'

export default (element, vElement) =>
  different(element.tagName, vElement.tagName)
