import * as r from 'ramda'

const mapTextNode = r.cond([
  [r.is(HTMLElement), (child) => child],
  [r.T, (child) => document.createTextNode(child)]
])

export default (children) =>
  r.map(mapTextNode, children)
