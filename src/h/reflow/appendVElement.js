import { T } from '../../share'

export default (element, vElement, parent) =>
  parent.appendChild(vElement.cloneNode(T()))
