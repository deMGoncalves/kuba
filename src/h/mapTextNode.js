import * as r from 'ramda'

const mapTextNode = child =>
  r.is(HTMLElement, child) ? child : document.createTextNode(child)

export default (children) =>
  r.map(mapTextNode, children)
