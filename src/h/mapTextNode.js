import is from 'ramda/src/is'
import map from 'ramda/src/map'

const mapTextNode = child =>
  is(HTMLElement, child) ? child : document.createTextNode(child)

export default (children) =>
  map(mapTextNode, children)
