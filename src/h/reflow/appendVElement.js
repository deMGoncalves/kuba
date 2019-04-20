import T from 'ramda/src/T'

export default (element, vElement, parent) =>
  parent.appendChild(vElement.cloneNode(T()))
